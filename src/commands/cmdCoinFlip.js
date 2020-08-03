const coinFlipModule = require('../coinFlip/coinFlip');

module.exports = {
    name: '!!coinflip',
    description: 'Flip a coin once.',
    execute(msg, args) {
        if (args.length){
            let num = args[0];
            msg.reply(`Coin flip resulted in ${coinFlipModule.flipCoinRepeatedly(num)}`);

        } else {
            msg.reply(`Coin flip resulted in ${coinFlipModule.flipCoin()}`);

        }
    },
};