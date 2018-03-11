import test from "ava";
import Koto from "../";

let rpc;

test.serial("Koto.auto", t => {
  rpc = Koto.auto();

  t.true(rpc instanceof Koto);
});

test("Koto#getinfo", t => {
  t.plan(1)

  return rpc.getinfo()
  .then(info => {
    const blocks = info.blocks;
    t.is(typeof blocks, "number")
  })
})

test("Koto#z_getnewaddress", t => {
  t.plan(1);

  return rpc.z_getnewaddress()
  .then(address => {
    t.is(typeof address, "string");
  });
});

test("Koto#z_listaddresses", t => {
  t.plan(1);

  return rpc.z_listaddresses()
  .then(addresses => {
    t.true(addresses instanceof Array);
  });
});
