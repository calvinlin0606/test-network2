# My Testing Trading network

> This is the testing sample of estate trading.

This business network defines:

**Participant**
`Trader`	

**Asset**
`Estate`

**Transaction**
`Trade`

**Event**
`SampleEvent`

To test this Business Network Definition in the **Test** tab:

Create a `Trader` participant:

```
{
  "$class": "org.acme.sample.Trader",
  "traderId": "12345678",
  "firstName": "Tobias",
  "lastName": "Hunter"
}
```

Create a `Estate` asset:

```
{
  "$class": "org.acme.sample.Estate",
  "estateId": "assetId:1",
  "owner": "resource:org.acme.sample.Trader#12345678",
  "value": "original description"
}
```

Submit a `addTrade` transaction:

```
{
  "$class": "org.acme.sample.addTrade",
  "asset": "resource:org.acme.sample.Estate#assetId:1",
  "newValue": "new description"
}
```

After submitting this transaction, you should now see the transaction in the Transaction Registry and that a `SampleEvent` has been emitted. As a result, the value of the `assetId:1` should now be `new description` in the Asset Registry.

Congratulations!
