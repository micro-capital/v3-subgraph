# Uniswap V3 Subgraph

### Subgraph Studio Deployment 

To deploy a Uni V3 Subgraph to the Subgraph Studio, you need to follow these steps:

1. Create a new subgraph in the Subgraph Studio. Documentation can be found [here](https://thegraph.com/docs/developer/quick-start#creating-a-new-subgraph).
2. Then, you need to change the following fields in the `subgraph.yaml` file to deploy a subgraph with the correct configuration:
   1. `network` - the network where the subgraph will be deployed (e.g., `mainnet`, `sepolia`, `polygon`, etc.). This must be changed in two places.
   2. `address` - the address of the Uniswap V3 Factory contract deployed on the desired network mentioned in the previous step.
   3. `startBlock` - the block number from which the subgraph will start indexing. It is recommended to set it to the block number when the Uniswap V3 Factory contract was deployed.
3. Refer to this [documentation](https://thegraph.com/docs/en/deploying/deploying-a-subgraph-to-studio/) to deploy the subgraph to the Subgraph Studio.
   1. Note that `graph` commands can be run from the root of the repository as follows:
      ```bash
      npx graph init --studio <SUBGRAPH_SLUG>
      graph auth --studio <DEPLOY KEY>
      ```
4. After all the steps are done, you can deploy the subgraph to the Subgraph Studio by running the following command:
   ```bash
   npx graph deploy --studio <SUBGRAPH_SLUG>
   ```
5. The subgraph will be deployed to the Subgraph Studio, and you can find it in the [Subgraph Studio](https://thegraph.com/studio).
6. To query the subgraph, you can use the following development query endpoint, e.g.:
   ```
   https://api.studio.thegraph.com/query/<uuid>/<SUBGRAPH_SLUG>/version/latest
   ```

### Running Unit Tests

1. Install [Docker](https://docs.docker.com/get-docker/) if you don't have it already
2. Install postgres: `brew install postgresql`
3. `yarn run build:docker`
4. `yarn run test`
