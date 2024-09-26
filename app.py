from flask import Flask, render_template, request, url_for, redirect, session
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.secret_key = '159357'  # Secret key for session handling

# Correct config key for SQLAlchemy URI
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://myuser:mypassword@localhost/mydb'
db = SQLAlchemy(app)

# Define User model with proper column definitions
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(16), nullable=False)

#########################################################

# Login Route
@app.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        # Query the user from the database
        user = User.query.filter_by(username=username).first()

        # Check if user exists and password matches
        if user and user.password == password:
            session['user'] = username
            return redirect(url_for('dashboard'))
        
        error = 'Invalid username or password. Please try again.'
        return render_template('login.html', error=error)  # Show error message
    return render_template('login.html')


# Dashboard Route
@app.route('/dashboard')
def dashboard():
    if 'user' in session:
        return render_template('dashboard.html', user=session['user'])
    return redirect(url_for('login'))  # Corrected redirection


# Logout Route
@app.route('/logout')
def logout():
    session.pop('user', None)
    return redirect(url_for('login'))  # Corrected redirection


if __name__ == '__main__':
    app.run(debug=True)
