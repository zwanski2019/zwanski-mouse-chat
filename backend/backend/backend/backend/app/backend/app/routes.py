from flask import Blueprint, render_template
from flask_socketio import emit
from . import socketio

main = Blueprint('main', __name__)

@main.route('/')
def index():
    return "Welcome to Mouse Code Chat"

@socketio.on('message')
def handle_message(message):
    emit('message', message, broadcast=True)
