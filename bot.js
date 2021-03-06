'use strict'

const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const tg = new Telegram.Telegram('talk to @botfather to get a key')


class ShenanigansController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
    handle($) {
        if('calendar' == $.query.cmd){
            $.sendMessage("Current Events: S! wed merry pool party; transistor zen Saturday. Dumplings Sunday")
        }
        else if('help' == $.query.cmd){
                  $.sendMessage("I'm the helpful S! bot.  I know the following commands: calendar, help")
        }
        else {
            $.sendMessage("Sorry, I don't know that command.  Keebler only spent 20 minutes on this code so I'm still dumber than a bag of doorknobs.  Tell him to get busy and add more stuff.")
        }
        
    }
}
class OtherwiseController extends TelegramBaseController {
    handle() {
        console.log('otherwise')
    }
}
tg.router
    .when(["/s :cmd"], new ShenanigansController())
    .otherwise(new OtherwiseController())
