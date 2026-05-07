from flask import Flask
from flask_cors import CORS
from routes.tarefa_routes import task_bp

app = Flask(__name__)

# LIBERA ACESSO DO FRONT-END
CORS(app)

app.register_blueprint(task_bp)

if __name__ == "__main__":
    app.run(debug=True)