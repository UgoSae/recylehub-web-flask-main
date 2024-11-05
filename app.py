from flask import Flask, render_template, redirect, url_for, session

app = Flask(__name__)
app.secret_key = 'your_secret_key'

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/admin/dashboard')
def admin_dashboard():
    return render_template('admin/dashboard-admin.html')

# Route untuk logout
@app.route('/logout', methods=['POST'])
def logout():
    # Logika logout, misalnya menghapus session
    session.clear()
    return redirect(url_for('home')) 

if __name__ == "__main__":
    app.run(debug=True)
