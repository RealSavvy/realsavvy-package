# Agent filter structure
# agent: {
#   id: 5,
#   relationships: ['listing', 'buyer']
# }
# OR
# agent: {
#   id: [5,6],
#   relationships: ['listing', 'buyer']
# }

module Property::V3::PreProcessor::Agent
  KEY = 'agent'.freeze

  def self.pre_process(filter, site)
    agent_filter = filter.delete(KEY)
    if agent_filter.present?
      agent_ids = Array.wrap(agent_filter['id']).map(&:presence).compact.map(&:to_i)
      relationships = Array.wrap(agent_filter['relationships'])

      if site.present? && User.where(id: agent_ids).for_site_ids([*site&.id]).exists?
        agent_profiles = AgentProfile.joins(:agent_profiles_sites).where(agent_profiles_sites: { site_id: site.id, user_id: agent_ids })
        agent_profiles.each do |agent_profile|
          data_source_name = agent_profile.data_source_name
          data_source_key = agent_profile.data_source_key

          filter['agent_profile'] ||= {}
          filter['agent_profile'][data_source_name] ||= { 'key' => [], 'relationships' => [] }
          feed_filter = filter['agent_profile'][data_source_name]

          feed_filter['key'] = Array.wrap(feed_filter['key']) unless feed_filter['key'].is_a?(Array)
          feed_filter['key'] << data_source_key

          feed_filter['relationships'] = (feed_filter['relationships'] + relationships).uniq
        end
      end
    end

    filter
  end
end
