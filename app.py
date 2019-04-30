from flask import Flask
from flask import request, abort
from flask_restplus import Api, Resource, fields
from werkzeug.contrib.fixers import ProxyFix
from flask_restplus import Model
from flask_cors import CORS,cross_origin
import csv
import random

app = Flask(__name__)
# app.wsgi_app = ProxyFix(app.wsgi_app)
api = Api(app, version='1.0', title='API',
    description='A simple API',
)
CORS(app, resources={r'/*': {'origins': '*'}}) 


ns = api.namespace('api', description='api operations')

schema = api.model('schema', {
    'file_type': fields.String(),
    'num_cols': fields.String(),
    'cols':fields.List(fields.String())
    })


# internal_data = fields.String(required=True, description='The task details')
# data = api.model('datas', {
#     'file_type': fields.String(),
#     'thing': fields.String
# })

@ns.route('/')
class initstuff(Resource):
    @ns.doc('init')
    def get(self):
        return {'hello':'world'}
    



@ns.route('/generate') 
class Generate(Resource):
    @ns.expect(schema)
    def get(self):
        print('here')
        thing = request.json 
        data = generate_data(thing['num_rows'],thing['cols'],thing['file_type'])
        print('here is thing: ' + thing)
        return {'hello':'world'}
    
    
    def generate_data(rows,col_data,file_type):
        data_file = []
        with open('table.csv', 'w', ) as myfile:
            wr = csv.writer(myfile, quoting=csv.QUOTE_ALL)
            for col in col_data:
                row = [str(col)]
                for x in range(rows):
                    row.append(random.randint(1,100000))
                wr.writerow(row)
                data_file.append(row)   
        if file_type == "JSON":
            toJson(data_file)
        return data_file
    
    
    def toJson(data):
        return data


if __name__ == '__main__':
    app.run(debug=True)