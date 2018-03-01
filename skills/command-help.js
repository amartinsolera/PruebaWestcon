//
// Command: help
//
module.exports = function (controller) {

    controller.hears(["help", "who"], 'direct_message,direct_mention', function (bot, message) {
        var text = "Here are my skills:";
        text += "\n- " + bot.enrichCommand(message, ".commons") + ": shows metadata about myself";
        text += "\n- " + bot.enrichCommand(message, "help") + ": spreads the word about my skills";
        text += "\n- " + bot.enrichCommand(message, "espacio") + ": I clone the room that you choose with the same people";
        text += "\n- " + bot.enrichCommand(message, "add") + ": añado las personas al espacio actual usando su dirección de email, separados por “,” si hay multiples";
        bot.reply(message, text);
    });
}
