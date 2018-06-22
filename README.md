# realsavvy-package
RealSavvy API Package that can be used client or server side

# API Docs
https://docs.realsavvy.com/reference

## How To Use

### Install Package

```bash
npm install realsavvy-package
```

### Creating A Client

```js
import { Client as RealSavvyClient } from 'realsavvy-package'

const client = new RealSavvyClient({token: 'jwt.access.token'});
```

### Querying for properties

```js
client.properties.search({filter: {price: {max: 500000}}, page: {size: 8}}).then(response => {
  console.log(response.data)
})
```

### Show a property

```js
client.properties.show({complexId: 'hudson_gateway_association_of_realtors~24542612'}).then(response => {
  console.log(response.data)
})
```

### Get share token for a user

```js
const client = new RealSavvyClient({token: 'jwt.access.tokenForUser'});

client.shareToken
```

### Get Agents For Given Site

```js
client.agents.index({page: {size: 8}}).then(response => {
  console.log(response.data)
})
```

### Show Agent

```js
client.agents.show({id: 48}).then(response => {
  console.log(response.data)
})
```

## How To Developer
1. Fork the repo and clone it down

2. Install dependies
```bash
npm install
```

3. Create your own branch for your changes
```bash
git checkout -b your-name/your-feature-or-fix
```

4. Make your changes

5. Run tests
```bash
npm test
```

6. Get tests green.

7. Build the package.
```bash
npx webpack
```

8. Commit your changes to your branch and push to them to your fork.

9. Request PR
