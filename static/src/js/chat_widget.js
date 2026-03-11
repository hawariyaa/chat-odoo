/** @odoo-module **/

import { Component, useState, onMounted } from "@odoo/owl";
import { registry } from "@web/core/registry";

export class ChatWidget extends Component {
    setup() {
        this.state = useState({
            open: false,
            messages: [],
            input: "",
        });
    }

    toggleChat() {
        this.state.open = !this.state.open;
    }

    sendMessage() {
        if (!this.state.input) return;

        this.state.messages.push({
            user: this.state.input,
            bot: "Demo response from bot",
        });

        this.state.input = "";
    }
   handleKeyUp(ev) {
    if (ev.key === "Enter") {
        this.sendMessage();
    }
}
}

ChatWidget.template = "custom_chat_ui.ChatWidget";

// Add to systray so it always loads
registry.category("systray").add("custom_chat_ui.chat_widget", {
    Component: ChatWidget,
});