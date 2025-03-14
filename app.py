from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mail import Mail, Message
import os
from dotenv import load_dotenv

# Load environment variables from .env file (if using)
load_dotenv()

app = Flask(__name__)
CORS(app)

# Configure Flask-Mail with Gmail SMTP
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv('EMAIL_USER')  # Load from environment
app.config['MAIL_PASSWORD'] = os.getenv('EMAIL_PASS')  # Load from environment
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('EMAIL_USER')

mail = Mail(app)
print(f"Using email: {app.config['MAIL_USERNAME']}, password: {app.config['MAIL_PASSWORD']}")
@app.route('/')
def home():
    return jsonify({"message": "Welcome to Digi Solutions Backend API"}), 200
@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    if not all([name, email, message]):
        return jsonify({'status': 'error', 'message': 'All fields are required'})

    # Send email
    msg = Message(
        subject=f"New Contact Form Submission from {name}",
        recipients=[os.getenv('EMAIL_USER')],  # Send to your email
        body=f"Name: {name}\nEmail: {email}\nMessage: {message}"
    )
    try:
        mail.send(msg)
        return jsonify({'status': 'success', 'message': 'Message sent successfully!'})
    except Exception as e:
        return jsonify({'status': 'error', 'message': f'Error sending message: {str(e)}'})

if __name__ == '__main__':
    app.run(debug=True, port=5555)