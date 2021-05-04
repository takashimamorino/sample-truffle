const GrreeterContract = artifacts.require('Greeter')

module.exports = (deployer) => {
  deployer.deploy(GrreeterContract)
}
