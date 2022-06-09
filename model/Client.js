const _ =  require("lodash")

const Client = (_node) => {

    _.extend(this, _node.properties);

    this.id  = this.id || this.id.toNumber();

    this.name = this.name || this.name.toString();

    this.amount = this.amount || this.amount.toNumber();

}

export default Client;