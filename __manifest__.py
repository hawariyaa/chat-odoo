{
    "name": "AI Chat Assistant",
    "version": "1.0",
    "summary": "Custom ChatGPT-like assistant for Odoo",
    "description": """
AI Chat Assistant
=================

This module adds a floating chat widget inside Odoo.

Features:
- Chat UI inside Odoo
- Floating chatbot widget
- Ready for AI / RAG integration
""",
    "author": "Your Name",
    "category": "Productivity",
    "license": "LGPL-3",

    "depends": [
        "base",
        "web",
    ],

    "data": [
       
    ],

    "assets": {
        "web.assets_backend": [
            "Chat/static/src/js/chat_widget.js",
            "Chat/static/src/xml/chat_widget.xml",
            "Chat/static/src/css/chat_widget.css",
        ],
    },

    "installable": True,
    "application": True,
}