const _ =  require("lodash")

export default function Client(_node) {

    _.extend(this, _node.properties);

    this.name = this.name || this.name.toString();

    this.amount = this.amount || this.amount.toNumber();

}
