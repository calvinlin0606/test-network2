import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.acme.testnetwork{
   export class Estate extends Asset {
      estateId: string;                 // variable : data type
      description: string;
      owner: Trader;
   }
   export class Trader extends Participant {
      tradeId: string;
      firstName: string;
      lastName: string;
   }
   export class Trade extends Transaction {
      estate: Estate;
      newOwner: Trader;
   }
// }
