# Six Reasons Why You Should Run Your Own Bitcoin Node

> Credit to : [https://bitcoinmagazine.com/culture/six-reasons-you-should-run-bitcoin-node](https://bitcoinmagazine.com/culture/six-reasons-you-should-run-bitcoin-node)

Let me explain quickly that a Bitcoin node is any computer which runs a piece of software (Bitcoin Core) that has some important jobs:

Your Bitcoin node needs to keep a copy of the entire Bitcoin blockchain. It has to connect with other nodes, forming a network of communication, which propagates transactions (transactions are kept in a “mempool”, i.e., the queue of transactions waiting to be included in the next block, and thus added to the blockchain). It needs to check that all additions to the blockchain are valid, and reject those that are not valid. It will provide details about the blockchain — such as balances — to other types of software that ask, like wallets. And it will provide a copy of the blockchain to any new node that wants to join. The new node then independently checks that every transaction in the copy it receives is valid. It does not actually “trust” the connected node.

To run a node, you download Bitcoin Core software, and then let it copy the blockchain from other nodes, and your node verifies each block itself. You then leave it on, and new blocks are received roughly every 10 minutes (the blocks contain transactions taken from the mempool). Your node will check if the block is valid, and if so, add it to its copy of the blockchain.

A dodgy block gets rejected, not because everyone else rejects it, and not because everyone copies their neighbor, but because the block is invalid according to the rules contained in the Bitcoin Core software, and everyone else that is running the same software will also reject that dodgy block.

Your Bitcoin wallet does not keep a copy of the blockchain, and is usually separate from Bitcoin Core (although Bitcoin Core does have a wallet feature). Your wallet just holds your keys. It has to ask a Bitcoin node, “Hey Mr. Node, this address of mine, does it have any bitcoin in it?” Technically that’s not quite accurate, but this is sufficient for now.

Running your own node means you don’t ask other people what their copy of Bitcoin Core is doing. It’s your own copy of Bitcoin Core, and you don’t need to trust other people. Your wallet can ask YOUR copy of the Bitcoin blockchain (making the digital connection between your wallet and node is the technically challenging and critical part, not just running the node — an article for another day).

So with the preamble done, let me next explain why it is important to run your own node:

### Reason 1 <a href="#reason-1" id="reason-1"></a>

_Privacy._

When your wallet tells you your bitcoin balance, it asks a RANDOM public Bitcoin node what balance each of your addresses contains. It then gives you the results, and you see your total bitcoin in that wallet. Even empty addresses which you haven’t used get queried. Surveillance companies run some of these nodes. “What the Hell?” Yes, it’s true.

You are telling a random entity, possibly a surveillance company, your IP address (which can be used to identify you), and that you have a Bitcoin wallet, and ALL of your current and future addresses you'll use within that wallet, and all the balances of all those addresses, now and later. Providing this information to surveillance companies is dangerous for many reasons. For example, this data can be leaked intentionally — to the government when requested — or unintentionally (to hackers). Governments may target Bitcoiners with heavy wealth taxes or confiscation, as the US government once did for gold with order [6102](https://en.wikipedia.org/wiki/Executive\_Order\_6102) in 1933, and hackers may target you to extort or trick you out of your bitcoin.

### Reason 2 <a href="#reason-2" id="reason-2"></a>

_You can confirm for yourself trustlessly that you are receiving real bitcoin._

For example, when you sell something, a technically sophisticated buyer could potentially manipulate which node your wallet connects to. They could send you counterfeit bitcoin, and your wallet would think it’s received real bitcoin because the malicious node lied to your wallet. Granted, this is very unlikely, but the fact that you can prevent it by running a node makes the development of this kind of attack not interesting or fruitful. What actually happens with this attack? The scammer somehow gets your Bitcoin wallet to read the wrong blockchain from a malicious node. He moves supposed bitcoin on THAT blockchain, not the real one, and your wallet thinks you’ve been paid.

If you get scammed in this way, you may accept this counterfeit as final payment, and may send goods in exchange for the fake bitcoin. One day, when you connect to a genuine Bitcoin node, your wallet will show that you never in fact received bitcoin. Your balance will be lower than what you thought it should be, because the fake transfer never existed on the real Bitcoin blockchain.

You can prevent this by connecting your wallet to a node you trust, but even better is to connect to your own node. “Don’t trust, verify,” is the Bitcoiner’s mantra.

Not doing this is kind of like accepting gold as payment, and asking a random person to use their XRF analyser to check if the gold you received is real. You don’t know if that random person is on the side of the buyer, or if they are honest.

You might ask, “No trust? Wait, aren’t I trusting Bitcoin Core when I download it? How do I know THAT’s not fake?” Yes and no. There are ways to verify that the software you downloaded is genuine, but that’s not for this article.

You might then ask, “Aren’t I trusting the developers that the genuine copy is behaving as I expect?” Actually yes, unless you write the software yourself, or read the code, or pay someone to read the code — but then you are trusting them. There has to be some level of trust, but the idea is to keep it to a minimum. (Just saying that might get me in trouble with the Bitcoin mob, shhh!) Most people (me included), can’t and won't read the code, so there is some element of trust. The trust is that hundreds, maybe thousands, of developers’ eyes are going over the code looking for errors and problems before it is released. It’s not easy to make changes to Bitcoin Core, and this is a feature, not a bug. Using the gold XRF analyser analogy, you are probably not going to build one from scratch to check whether or not your gold is real, and that’s okay.

### Reason 3 <a href="#reason-3" id="reason-3"></a>

_Defend the Bitcoin rules from unwanted changes — like scarcity or block size._

If a group of "powerful" people banded together, as they did in 2017, and decided to try to change the rules of how Bitcoin works (for example, by increasing the block size), you can choose to not upgrade your node to the new system and keep your current node. If you are more than the minority, there will be a pool of people running the unchanged Bitcoin Core and a pool of people running the changed version — a fork. This is how Bitcoin Cash was born. The new version was unanimously rejected, but those who lost the war kept running their nodes and mining bitcoin cash as well. Those who owned bitcoin then also owned bitcoin cash. For a given address, there was one balance on the Bitcoin blockchain, one balance on the Bitcoin Cash blockchain.

If you weren’t running your own node at the time, you had no say in this war. Your wallet might have connected to a Bitcoin Cash node and someone might have paid you in bitcoin cash instead of with bitcoin. You then might have given up your goods in exchange for coins that didn’t meet the monetary policy you preferred.

### Reason 4 <a href="#reason-4" id="reason-4"></a>

_If you run a node, and leave it on 24 hours a day, this helps the network._

The more nodes that are running, the faster transactions can propagate for everyone, and the harder it is to shut down Bitcoin. In order to kill Bitcoin, every single copy of the blockchain must be destroyed.

### Reason 5 <a href="#reason-5" id="reason-5"></a>

_Be an "Uncle Jim"._

In the future, it _may_ be too challenging for EVERYONE to run their own node, but we don’t want people trusting random nodes. I imagine there will be a technical person in every social “circle of trust” ("Uncle Jim") for people to connect their wallets to. This tiny trade-off is far better than connecting to random public Bitcoin nodes.

If you learn to run your own node, then YOU also become a kind of human node, because you could one day help someone else to run and use their own node.

### Reason 6 <a href="#reason-6" id="reason-6"></a>

_Coolness factor and street cred._

Running your own node is super cool, and gives you a great appreciation of the power of Bitcoin. You’ll probably end up buying more.

### Conclusion: <a href="#conclusion" id="conclusion"></a>

Hopefully, it is clear now why you should run a node. There are various ways. [If you want individual help, see here](https://armantheparman.com/mentorship/). For the computer illiterate, help is available at [www.bitcoin4boomers.com](http://www.bitcoin4boomers.com/).

_This is a guest post by Arman the Parman. Opinions expressed are entirely their own and do not necessarily reflect those of BTC Inc or_ Bitcoin Magazine_._
