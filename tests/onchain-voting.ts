import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { OnchainVoting } from "../target/types/onchain_voting";

describe("onchain-voting", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.OnchainVoting as Program<OnchainVoting>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
