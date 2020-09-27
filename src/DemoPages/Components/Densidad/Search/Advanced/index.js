import React, {Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classnames from 'classnames';

import {
    TabContent, TabPane, Nav, NavItem, NavLink,
    Row, Col, CardHeader, CardFooter,
    Card, CardBody, CardTitle,
    Button, ButtonGroup, CustomInput, Form, FormGroup, Label
} from 'reactstrap';

export default class AdvacedReport extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            activeTab: '1',
            ano: '',
            mes: '',
            categoria: '',
            data: [
                /* 1 */
                {
                    "_id" : ObjectId("5f6f84b657a3a80d38b26d16"),
                    "año" : "2019",
                    "municipio" : "Chihuahua",
                    "region" : "Arqueologica",
                    "meses" : {
                        "Enero" : "1,71",
                        "Febrero" : "1,6",
                        "Marzo" : "1,69",
                        "Abril" : "1,982",
                        "Mayo" : "1,68",
                        "Junio" : "1,68",
                        "Julio" : "1,87",
                        "Agosto" : "1,91",
                        "Septiembre" : "1,73",
                        "Octubre" : "1,73",
                        "Noviembre" : "1,7",
                        "Diciembre" : "1,77"
                    },
                    "__v" : 0
                },

                /* 2 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a746"),
                    "Año" : "2019",
                    "Municipio" : "Nuevo Casas Grandes",
                    "Region" : "Arqueologica",
                    "Meses" : {
                        "Enero" : "1,71",
                        "Febrero" : "1,6",
                        "Marzo" : "1,69",
                        "Abril" : "1,982",
                        "Mayo" : "1,68",
                        "Junio" : "1,68",
                        "Julio" : "1,87",
                        "Agosto" : "1,91",
                        "Septiembre" : "1,73",
                        "Octubre" : "1,73",
                        "Noviembre" : "1,7",
                        "Diciembre" : "1,77"
                    }
                },

                /* 3 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a749"),
                    "Año" : "2019",
                    "Municipio" : "Madera",
                    "Region" : "Arqueologica",
                    "Meses" : {
                        "Enero" : "1,22",
                        "Febrero" : "1,55",
                        "Marzo" : "1,7",
                        "Abril" : "2,106666667",
                        "Mayo" : "1,64",
                        "Junio" : "1,45",
                        "Julio" : "1,5",
                        "Agosto" : "1,73",
                        "Septiembre" : "2,25",
                        "Octubre" : "1,5",
                        "Noviembre" : "1,5",
                        "Diciembre" : 3
                    }
                },

                /* 4 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a74c"),
                    "Año" : "2019",
                    "Municipio" : "Bocoyna",
                    "Region" : "Barrancas del Cobre",
                    "Meses" : {
                        "Enero" : "1,73",
                        "Febrero" : "1,95",
                        "Marzo" : "1,85",
                        "Abril" : "2,329333333",
                        "Mayo" : "1,72",
                        "Junio" : "1,72",
                        "Julio" : "1,85",
                        "Agosto" : 2,
                        "Septiembre" : "2,2",
                        "Octubre" : "2,222222222",
                        "Noviembre" : "2,5",
                        "Diciembre" : "2,7"
                    }
                },

                /* 5 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a74f"),
                    "Año" : "2019",
                    "Municipio" : "Ocampo",
                    "Region" : "Barrancas del Cobre",
                    "Meses" : {
                        "Enero" : "1,73",
                        "Febrero" : "1,73",
                        "Marzo" : "1,85",
                        "Abril" : 2,
                        "Mayo" : "1,77",
                        "Junio" : "1,7",
                        "Julio" : "1,7",
                        "Agosto" : "1,75",
                        "Septiembre" : "1,75",
                        "Octubre" : 2,
                        "Noviembre" : 2,
                        "Diciembre" : "1,75"
                    }
                },

                /* 6 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a752"),
                    "Año" : "2019",
                    "Municipio" : "Urique",
                    "Region" : "Barrancas del Cobre",
                    "Meses" : {
                        "Enero" : "1,7",
                        "Febrero" : "1,78",
                        "Marzo" : "1,73",
                        "Abril" : "1,733333333",
                        "Mayo" : "1,55",
                        "Junio" : "1,5",
                        "Julio" : "1,7",
                        "Agosto" : "1,85",
                        "Septiembre" : 2,
                        "Octubre" : 2,
                        "Noviembre" : 2,
                        "Diciembre" : "1,75"
                    }
                },

                /* 7 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a755"),
                    "Año" : "2019",
                    "Municipio" : "Guachochi",
                    "Region" : "Barrancas del Cobre",
                    "Meses" : {
                        "Enero" : "1,75",
                        "Febrero" : "1,8",
                        "Marzo" : "1,73",
                        "Abril" : "2,4248",
                        "Mayo" : 2,
                        "Junio" : "1,73",
                        "Julio" : "1,73",
                        "Agosto" : "1,9",
                        "Septiembre" : "1,75",
                        "Octubre" : "2,333333333",
                        "Noviembre" : "2,375",
                        "Diciembre" : "2,75"
                    }
                },

                /* 8 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a758"),
                    "Año" : "2019",
                    "Municipio" : "Batopilas",
                    "Region" : "Barrancas del Cobre",
                    "Meses" : {
                        "Enero" : "1,79",
                        "Febrero" : "1,85",
                        "Marzo" : 2,
                        "Abril" : "2,2",
                        "Mayo" : "1,77",
                        "Junio" : "1,77",
                        "Julio" : "1,71",
                        "Agosto" : "1,8",
                        "Septiembre" : "2,2",
                        "Octubre" : "2,4",
                        "Noviembre" : 2,
                        "Diciembre" : "2,5"
                    }
                },

                /* 9 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a75b"),
                    "Año" : "2019",
                    "Municipio" : "Balleza",
                    "Region" : "Barrancas del Cobre",
                    "Meses" : {
                        "Enero" : "1,74",
                        "Febrero" : "1,822",
                        "Marzo" : "1,832",
                        "Abril" : "2,137493333",
                        "Mayo" : "1,762",
                        "Junio" : "1,684",
                        "Julio" : "1,738",
                        "Agosto" : "1,86",
                        "Septiembre" : "1,98",
                        "Octubre" : "2,191111111",
                        "Noviembre" : "2,175",
                        "Diciembre" : "2,29"
                    }
                },

                /* 10 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a75e"),
                    "Año" : "2019",
                    "Municipio" : "Chinipas",
                    "Region" : "Barrancas del Cobre",
                    "Meses" : {
                        "Enero" : "1,74",
                        "Febrero" : "1,822",
                        "Marzo" : "1,832",
                        "Abril" : "2,137493333",
                        "Mayo" : "1,762",
                        "Junio" : "1,684",
                        "Julio" : "1,738",
                        "Agosto" : "1,86",
                        "Septiembre" : "1,98",
                        "Octubre" : "2,191111111",
                        "Noviembre" : "2,175",
                        "Diciembre" : "2,29"
                    }
                },

                /* 11 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a761"),
                    "Año" : "2019",
                    "Municipio" : "G. y Calvo",
                    "Region" : "Barrancas del Cobre",
                    "Meses" : {
                        "Enero" : "1,74",
                        "Febrero" : "1,822",
                        "Marzo" : "1,832",
                        "Abril" : "2,137493333",
                        "Mayo" : "1,762",
                        "Junio" : "1,684",
                        "Julio" : "1,738",
                        "Agosto" : "1,86",
                        "Septiembre" : "1,98",
                        "Octubre" : "2,191111111",
                        "Noviembre" : "2,175",
                        "Diciembre" : "2,29"
                    }
                },

                /* 12 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a764"),
                    "Año" : "2019",
                    "Municipio" : "Guazapares",
                    "Region" : "Barrancas del Cobre",
                    "Meses" : {
                        "Enero" : "1,74",
                        "Febrero" : "1,822",
                        "Marzo" : "1,832",
                        "Abril" : "2,137493333",
                        "Mayo" : "1,762",
                        "Junio" : "1,684",
                        "Julio" : "1,738",
                        "Agosto" : "1,86",
                        "Septiembre" : "1,98",
                        "Octubre" : "2,191111111",
                        "Noviembre" : "2,175",
                        "Diciembre" : "2,29"
                    }
                },

                /* 13 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a767"),
                    "Año" : "2019",
                    "Municipio" : "Guerrero",
                    "Region" : "Barrancas del Cobre",
                    "Meses" : {
                        "Enero" : "1,74",
                        "Febrero" : "1,822",
                        "Marzo" : "1,832",
                        "Abril" : "2,137493333",
                        "Mayo" : "1,762",
                        "Junio" : "1,684",
                        "Julio" : "1,738",
                        "Agosto" : "1,86",
                        "Septiembre" : "1,98",
                        "Octubre" : "2,191111111",
                        "Noviembre" : "2,175",
                        "Diciembre" : "2,29"
                    }
                },

                /* 14 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a76a"),
                    "Año" : "2019",
                    "Municipio" : "Maguarichi",
                    "Region" : "Barrancas del Cobre",
                    "Meses" : {
                        "Enero" : "1,74",
                        "Febrero" : "1,822",
                        "Marzo" : "1,832",
                        "Abril" : "2,137493333",
                        "Mayo" : "1,762",
                        "Junio" : "1,684",
                        "Julio" : "1,738",
                        "Agosto" : "1,86",
                        "Septiembre" : "1,98",
                        "Octubre" : "2,191111111",
                        "Noviembre" : "2,175",
                        "Diciembre" : "2,29"
                    }
                },

                /* 15 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a76d"),
                    "Año" : "2019",
                    "Municipio" : "Moris",
                    "Region" : "Barrancas del Cobre",
                    "Meses" : {
                        "Enero" : "1,74",
                        "Febrero" : "1,822",
                        "Marzo" : "1,832",
                        "Abril" : "2,137493333",
                        "Mayo" : "1,762",
                        "Junio" : "1,684",
                        "Julio" : "1,738",
                        "Agosto" : "1,86",
                        "Septiembre" : "1,98",
                        "Octubre" : "2,191111111",
                        "Noviembre" : "2,175",
                        "Diciembre" : "2,29"
                    }
                },

                /* 16 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a770"),
                    "Año" : "2019",
                    "Municipio" : "Uruachi",
                    "Region" : "Barrancas del Cobre",
                    "Meses" : {
                        "Enero" : "1,74",
                        "Febrero" : "1,822",
                        "Marzo" : "1,832",
                        "Abril" : "2,137493333",
                        "Mayo" : "1,762",
                        "Junio" : "1,684",
                        "Julio" : "1,738",
                        "Agosto" : "1,86",
                        "Septiembre" : "1,98",
                        "Octubre" : "2,191111111",
                        "Noviembre" : "2,175",
                        "Diciembre" : "2,29"
                    }
                },

                /* 17 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a773"),
                    "Año" : "2019",
                    "Municipio" : "Chihuahua",
                    "Region" : "Chihuahua",
                    "Meses" : {
                        "Enero" : "1,8",
                        "Febrero" : "1,61",
                        "Marzo" : "1,77",
                        "Abril" : "1,788333333",
                        "Mayo" : "1,69",
                        "Junio" : "1,76",
                        "Julio" : "1,66",
                        "Agosto" : "1,77",
                        "Septiembre" : "1,74",
                        "Octubre" : "1,76",
                        "Noviembre" : "1,73",
                        "Diciembre" : "1,76"
                    }
                },

                /* 18 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a776"),
                    "Año" : "2019",
                    "Municipio" : "Cuauht�moc",
                    "Region" : "Chihuahua",
                    "Meses" : {
                        "Enero" : "1,73",
                        "Febrero" : "1,73",
                        "Marzo" : "1,75",
                        "Abril" : "1,694",
                        "Mayo" : "1,55",
                        "Junio" : "1,5",
                        "Julio" : "1,55",
                        "Agosto" : "2,5",
                        "Septiembre" : "2,33",
                        "Octubre" : "2,25",
                        "Noviembre" : "2,666666667",
                        "Diciembre" : "2,9"
                    }
                },

                /* 19 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a779"),
                    "Año" : "2019",
                    "Municipio" : "Ojinaga",
                    "Region" : "Desierto",
                    "Meses" : {
                        "Enero" : "1,77",
                        "Febrero" : "1,85",
                        "Marzo" : "1,79",
                        "Abril" : "1,87",
                        "Mayo" : "1,5",
                        "Junio" : "1,5",
                        "Julio" : "1,55",
                        "Agosto" : "1,66",
                        "Septiembre" : "2,5",
                        "Octubre" : "2,333333333",
                        "Noviembre" : "2,666666667",
                        "Diciembre" : "2,75"
                    }
                },

                /* 20 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a77c"),
                    "Año" : "2019",
                    "Municipio" : "Ju�rez",
                    "Region" : "Ju�rez",
                    "Meses" : {
                        "Enero" : "1,55",
                        "Febrero" : "1,58",
                        "Marzo" : "1,59",
                        "Abril" : "1,553",
                        "Mayo" : "1,59",
                        "Junio" : "1,62",
                        "Julio" : "1,58",
                        "Agosto" : "1,38",
                        "Septiembre" : "1,53",
                        "Octubre" : "1,56",
                        "Noviembre" : "1,56",
                        "Diciembre" : "1,55"
                    }
                },

                /* 21 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a77f"),
                    "Año" : "2019",
                    "Municipio" : "Delicias",
                    "Region" : "Perla de Conchos",
                    "Meses" : {
                        "Enero" : "1,95",
                        "Febrero" : "1,95",
                        "Marzo" : 2,
                        "Abril" : "2,581333333",
                        "Mayo" : "1,63",
                        "Junio" : "1,5",
                        "Julio" : "1,5",
                        "Agosto" : "1,5",
                        "Septiembre" : "2,3",
                        "Octubre" : "2,416666667",
                        "Noviembre" : 2,
                        "Diciembre" : "2,2"
                    }
                },

                /* 22 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a782"),
                    "Año" : "2019",
                    "Municipio" : "Camargo",
                    "Region" : "Perla de Conchos",
                    "Meses" : {
                        "Enero" : "1,77",
                        "Febrero" : "1,77",
                        "Marzo" : "1,85",
                        "Abril" : "2,46",
                        "Mayo" : "1,5",
                        "Junio" : "1,5",
                        "Julio" : "1,75",
                        "Agosto" : "2,5",
                        "Septiembre" : 2,
                        "Octubre" : 2,
                        "Noviembre" : "2,5",
                        "Diciembre" : "2,833333333"
                    }
                },

                /* 23 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a785"),
                    "Año" : "2019",
                    "Municipio" : "Jim�nez",
                    "Region" : "Ruta de Villa",
                    "Meses" : {
                        "Enero" : "1,5",
                        "Febrero" : "1,5",
                        "Marzo" : "1,45",
                        "Abril" : "1,553333333",
                        "Mayo" : "1,5",
                        "Junio" : "1,35",
                        "Julio" : "1,55",
                        "Agosto" : "1,45",
                        "Septiembre" : 2,
                        "Octubre" : 1,
                        "Noviembre" : 2,
                        "Diciembre" : 2
                    }
                },

                /* 24 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a788"),
                    "Año" : "2019",
                    "Municipio" : "H. del Parral",
                    "Region" : "Ruta de Villa",
                    "Meses" : {
                        "Enero" : "1,77",
                        "Febrero" : "1,87",
                        "Marzo" : "1,84",
                        "Abril" : "2,046666667",
                        "Mayo" : "1,87",
                        "Junio" : "1,55",
                        "Julio" : "1,9",
                        "Agosto" : "1,78",
                        "Septiembre" : "1,78",
                        "Octubre" : "1,83",
                        "Noviembre" : "1,91",
                        "Diciembre" : "2,15"
                    }
                },

                /* 25 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a78b"),
                    "Año" : "2019",
                    "Municipio" : "Ahumada",
                    "Region" : "Ju�rez",
                    "Meses" : {
                        "Enero" : "1,73",
                        "Febrero" : "1,7325",
                        "Marzo" : "1,755",
                        "Abril" : "1,943333333",
                        "Mayo" : "1,60375",
                        "Junio" : "1,535",
                        "Julio" : "1,63",
                        "Agosto" : "1,8175",
                        "Septiembre" : "2,0225",
                        "Octubre" : "1,89375",
                        "Noviembre" : "2,129166667",
                        "Diciembre" : "2,267916667"
                    }
                },

                /* 26 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a78e"),
                    "Año" : "2019",
                    "Municipio" : "Aldama",
                    "Region" : "Desierto",
                    "Meses" : {
                        "Enero" : "1,73",
                        "Febrero" : "1,7325",
                        "Marzo" : "1,755",
                        "Abril" : "1,943333333",
                        "Mayo" : "1,60375",
                        "Junio" : "1,535",
                        "Julio" : "1,63",
                        "Agosto" : "1,8175",
                        "Septiembre" : "2,0225",
                        "Octubre" : "1,89375",
                        "Noviembre" : "2,129166667",
                        "Diciembre" : "2,267916667"
                    }
                },

                /* 27 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a791"),
                    "Año" : "2019",
                    "Municipio" : "Allende",
                    "Region" : "Ruta de Villa",
                    "Meses" : {
                        "Enero" : "1,73",
                        "Febrero" : "1,7325",
                        "Marzo" : "1,755",
                        "Abril" : "1,943333333",
                        "Mayo" : "1,60375",
                        "Junio" : "1,535",
                        "Julio" : "1,63",
                        "Agosto" : "1,8175",
                        "Septiembre" : "2,0225",
                        "Octubre" : "1,89375",
                        "Noviembre" : "2,129166667",
                        "Diciembre" : "2,267916667"
                    }
                },

                /* 28 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a794"),
                    "Año" : "2019",
                    "Municipio" : "Ascenci�n",
                    "Region" : "Ju�rez",
                    "Meses" : {
                        "Enero" : "1,73",
                        "Febrero" : "1,7325",
                        "Marzo" : "1,755",
                        "Abril" : "1,943333333",
                        "Mayo" : "1,60375",
                        "Junio" : "1,535",
                        "Julio" : "1,63",
                        "Agosto" : "1,8175",
                        "Septiembre" : "2,0225",
                        "Octubre" : "1,89375",
                        "Noviembre" : "2,129166667",
                        "Diciembre" : "2,267916667"
                    }
                },

                /* 29 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a797"),
                    "Año" : "2019",
                    "Municipio" : "Bachiniva",
                    "Region" : "Arqueologica",
                    "Meses" : {
                        "Enero" : "1,73",
                        "Febrero" : "1,7325",
                        "Marzo" : "1,755",
                        "Abril" : "1,943333333",
                        "Mayo" : "1,60375",
                        "Junio" : "1,535",
                        "Julio" : "1,63",
                        "Agosto" : "1,8175",
                        "Septiembre" : "2,0225",
                        "Octubre" : "1,89375",
                        "Noviembre" : "2,129166667",
                        "Diciembre" : "2,267916667"
                    }
                },

                /* 30 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a79a"),
                    "Año" : "2019",
                    "Municipio" : "Buenaventura",
                    "Region" : "Arqueologica",
                    "Meses" : {
                        "Enero" : "1,73",
                        "Febrero" : "1,7325",
                        "Marzo" : "1,755",
                        "Abril" : "1,943333333",
                        "Mayo" : "1,60375",
                        "Junio" : "1,535",
                        "Julio" : "1,63",
                        "Agosto" : "1,8175",
                        "Septiembre" : "2,0225",
                        "Octubre" : "1,89375",
                        "Noviembre" : "2,129166667",
                        "Diciembre" : "2,267916667"
                    }
                },

                /* 31 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a79d"),
                    "Año" : "2019",
                    "Municipio" : "Carich�",
                    "Region" : "Chihuahua",
                    "Meses" : {
                        "Enero" : "1,73",
                        "Febrero" : "1,7325",
                        "Marzo" : "1,755",
                        "Abril" : "1,943333333",
                        "Mayo" : "1,60375",
                        "Junio" : "1,535",
                        "Julio" : "1,63",
                        "Agosto" : "1,8175",
                        "Septiembre" : "2,0225",
                        "Octubre" : "1,89375",
                        "Noviembre" : "2,129166667",
                        "Diciembre" : "2,267916667"
                    }
                },

                /* 32 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a7a0"),
                    "Año" : "2019",
                    "Municipio" : "Casas Grandes",
                    "Region" : "Arqueologica",
                    "Meses" : {
                        "Enero" : "1,73",
                        "Febrero" : "1,7325",
                        "Marzo" : "1,755",
                        "Abril" : "1,943333333",
                        "Mayo" : "1,60375",
                        "Junio" : "1,535",
                        "Julio" : "1,63",
                        "Agosto" : "1,8175",
                        "Septiembre" : "2,0225",
                        "Octubre" : "1,89375",
                        "Noviembre" : "2,129166667",
                        "Diciembre" : "2,267916667"
                    }
                },

                /* 33 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a7a3"),
                    "Año" : "2019",
                    "Municipio" : "Coyame del Sotol",
                    "Region" : "Desierto",
                    "Meses" : {
                        "Enero" : "1,73",
                        "Febrero" : "1,7325",
                        "Marzo" : "1,755",
                        "Abril" : "1,943333333",
                        "Mayo" : "1,60375",
                        "Junio" : "1,535",
                        "Julio" : "1,63",
                        "Agosto" : "1,8175",
                        "Septiembre" : "2,0225",
                        "Octubre" : "1,89375",
                        "Noviembre" : "2,129166667",
                        "Diciembre" : "2,267916667"
                    }
                },

                /* 34 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a7a6"),
                    "Año" : "2019",
                    "Municipio" : "G�mez Far�as",
                    "Region" : "Arqueologica",
                    "Meses" : {
                        "Enero" : "1,73",
                        "Febrero" : "1,7325",
                        "Marzo" : "1,755",
                        "Abril" : "1,943333333",
                        "Mayo" : "1,60375",
                        "Junio" : "1,535",
                        "Julio" : "1,63",
                        "Agosto" : "1,8175",
                        "Septiembre" : "2,0225",
                        "Octubre" : "1,89375",
                        "Noviembre" : "2,129166667",
                        "Diciembre" : "2,267916667"
                    }
                },

                /* 35 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a7a9"),
                    "Año" : "2019",
                    "Municipio" : "Janos",
                    "Region" : "Arqueologica",
                    "Meses" : {
                        "Enero" : "1,73",
                        "Febrero" : "1,7325",
                        "Marzo" : "1,755",
                        "Abril" : "1,943333333",
                        "Mayo" : "1,60375",
                        "Junio" : "1,535",
                        "Julio" : "1,63",
                        "Agosto" : "1,8175",
                        "Septiembre" : "2,0225",
                        "Octubre" : "1,89375",
                        "Noviembre" : "2,129166667",
                        "Diciembre" : "2,267916667"
                    }
                },

                /* 36 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a7ac"),
                    "Año" : "2019",
                    "Municipio" : "Julimes",
                    "Region" : "Ruta de Villa",
                    "Meses" : {
                        "Enero" : "1,73",
                        "Febrero" : "1,7325",
                        "Marzo" : "1,755",
                        "Abril" : "1,943333333",
                        "Mayo" : "1,60375",
                        "Junio" : "1,535",
                        "Julio" : "1,63",
                        "Agosto" : "1,8175",
                        "Septiembre" : "2,0225",
                        "Octubre" : "1,89375",
                        "Noviembre" : "2,129166667",
                        "Diciembre" : "2,267916667"
                    }
                },

                /* 37 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a7af"),
                    "Año" : "2019",
                    "Municipio" : "Lopez",
                    "Region" : "Ruta de Villa",
                    "Meses" : {
                        "Enero" : "1,73",
                        "Febrero" : "1,7325",
                        "Marzo" : "1,755",
                        "Abril" : "1,943333333",
                        "Mayo" : "1,60375",
                        "Junio" : "1,535",
                        "Julio" : "1,63",
                        "Agosto" : "1,8175",
                        "Septiembre" : "2,0225",
                        "Octubre" : "1,89375",
                        "Noviembre" : "2,129166667",
                        "Diciembre" : "2,267916667"
                    }
                },

                /* 38 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a7b2"),
                    "Año" : "2019",
                    "Municipio" : "Manuel Benavides",
                    "Region" : "Desierto",
                    "Meses" : {
                        "Enero" : "1,73",
                        "Febrero" : "1,7325",
                        "Marzo" : "1,755",
                        "Abril" : "1,943333333",
                        "Mayo" : "1,60375",
                        "Junio" : "1,535",
                        "Julio" : "1,63",
                        "Agosto" : "1,8175",
                        "Septiembre" : "2,0225",
                        "Octubre" : "1,89375",
                        "Noviembre" : "2,129166667",
                        "Diciembre" : "2,267916667"
                    }
                },

                /* 39 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a7b5"),
                    "Año" : "2019",
                    "Municipio" : "Matach�",
                    "Region" : "Arqueologica",
                    "Meses" : {
                        "Enero" : "1,73",
                        "Febrero" : "1,7325",
                        "Marzo" : "1,755",
                        "Abril" : "1,943333333",
                        "Mayo" : "1,60375",
                        "Junio" : "1,535",
                        "Julio" : "1,63",
                        "Agosto" : "1,8175",
                        "Septiembre" : "2,0225",
                        "Octubre" : "1,89375",
                        "Noviembre" : "2,129166667",
                        "Diciembre" : "2,267916667"
                    }
                },

                /* 40 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a7b8"),
                    "Año" : "2019",
                    "Municipio" : "Meoqu�",
                    "Region" : "Perlas de Conchos",
                    "Meses" : {
                        "Enero" : "1,73",
                        "Febrero" : "1,7325",
                        "Marzo" : "1,755",
                        "Abril" : "1,943333333",
                        "Mayo" : "1,60375",
                        "Junio" : "1,535",
                        "Julio" : "1,63",
                        "Agosto" : "1,8175",
                        "Septiembre" : "2,0225",
                        "Octubre" : "1,89375",
                        "Noviembre" : "2,129166667",
                        "Diciembre" : "2,267916667"
                    }
                },

                /* 41 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a7bb"),
                    "Año" : "2019",
                    "Municipio" : "Namiquipa",
                    "Region" : "Arqueologica",
                    "Meses" : {
                        "Enero" : "1,73",
                        "Febrero" : "1,7325",
                        "Marzo" : "1,755",
                        "Abril" : "1,943333333",
                        "Mayo" : "1,60375",
                        "Junio" : "1,535",
                        "Julio" : "1,63",
                        "Agosto" : "1,8175",
                        "Septiembre" : "2,0225",
                        "Octubre" : "1,89375",
                        "Noviembre" : "2,129166667",
                        "Diciembre" : "2,267916667"
                    }
                },

                /* 42 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a7be"),
                    "Año" : "2019",
                    "Municipio" : "Riva Palacio",
                    "Region" : "Chihuahua",
                    "Meses" : {
                        "Enero" : "1,73",
                        "Febrero" : "1,7325",
                        "Marzo" : "1,755",
                        "Abril" : "1,943333333",
                        "Mayo" : "1,60375",
                        "Junio" : "1,535",
                        "Julio" : "1,63",
                        "Agosto" : "1,8175",
                        "Septiembre" : "2,0225",
                        "Octubre" : "1,89375",
                        "Noviembre" : "2,129166667",
                        "Diciembre" : "2,267916667"
                    }
                },

                /* 43 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a7c1"),
                    "Año" : "2019",
                    "Municipio" : "Rosales",
                    "Region" : "Perlas de Conchos",
                    "Meses" : {
                        "Enero" : "1,73",
                        "Febrero" : "1,7325",
                        "Marzo" : "1,755",
                        "Abril" : "1,943333333",
                        "Mayo" : "1,60375",
                        "Junio" : "1,535",
                        "Julio" : "1,63",
                        "Agosto" : "1,8175",
                        "Septiembre" : "2,0225",
                        "Octubre" : "1,89375",
                        "Noviembre" : "2,129166667",
                        "Diciembre" : "2,267916667"
                    }
                },

                /* 44 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a7c4"),
                    "Año" : "2019",
                    "Municipio" : "Sn Fco. Borja",
                    "Region" : "Chihuahua",
                    "Meses" : {
                        "Enero" : "1,73",
                        "Febrero" : "1,7325",
                        "Marzo" : "1,755",
                        "Abril" : "1,943333333",
                        "Mayo" : "1,60375",
                        "Junio" : "1,535",
                        "Julio" : "1,63",
                        "Agosto" : "1,8175",
                        "Septiembre" : "2,0225",
                        "Octubre" : "1,89375",
                        "Noviembre" : "2,129166667",
                        "Diciembre" : "2,267916667"
                    }
                },

                /* 45 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a7c7"),
                    "Año" : "2019",
                    "Municipio" : "Sn Fco. Conchos",
                    "Region" : "Perlas de Conchos",
                    "Meses" : {
                        "Enero" : "1,73",
                        "Febrero" : "1,7325",
                        "Marzo" : "1,755",
                        "Abril" : "1,943333333",
                        "Mayo" : "1,60375",
                        "Junio" : "1,535",
                        "Julio" : "1,63",
                        "Agosto" : "1,8175",
                        "Septiembre" : "2,0225",
                        "Octubre" : "1,89375",
                        "Noviembre" : "2,129166667",
                        "Diciembre" : "2,267916667"
                    }
                },

                /* 46 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a7ca"),
                    "Año" : "2019",
                    "Municipio" : "Santa Barbara",
                    "Region" : "Ruta de Villa",
                    "Meses" : {
                        "Enero" : "1,73",
                        "Febrero" : "1,7325",
                        "Marzo" : "1,755",
                        "Abril" : "1,943333333",
                        "Mayo" : "1,60375",
                        "Junio" : "1,535",
                        "Julio" : "1,63",
                        "Agosto" : "1,8175",
                        "Septiembre" : "2,0225",
                        "Octubre" : "1,89375",
                        "Noviembre" : "2,129166667",
                        "Diciembre" : "2,267916667"
                    }
                },

                /* 47 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a7cd"),
                    "Año" : "2019",
                    "Municipio" : "Saucillo",
                    "Region" : "Perlas de Conchos",
                    "Meses" : {
                        "Enero" : "1,73",
                        "Febrero" : "1,7325",
                        "Marzo" : "1,755",
                        "Abril" : "1,943333333",
                        "Mayo" : "1,60375",
                        "Junio" : "1,535",
                        "Julio" : "1,63",
                        "Agosto" : "1,8175",
                        "Septiembre" : "2,0225",
                        "Octubre" : "1,89375",
                        "Noviembre" : "2,129166667",
                        "Diciembre" : "2,267916667"
                    }
                },

                /* 48 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a7d0"),
                    "Año" : "2019",
                    "Municipio" : "Temosachi",
                    "Region" : "Arqueologica",
                    "Meses" : {
                        "Enero" : "1,73",
                        "Febrero" : "1,7325",
                        "Marzo" : "1,755",
                        "Abril" : "1,943333333",
                        "Mayo" : "1,60375",
                        "Junio" : "1,535",
                        "Julio" : "1,63",
                        "Agosto" : "1,8175",
                        "Septiembre" : "2,0225",
                        "Octubre" : "1,89375",
                        "Noviembre" : "2,129166667",
                        "Diciembre" : "2,267916667"
                    }
                },

                /* 49 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a7d3"),
                    "Año" : "2019",
                    "Municipio" : "Valle de Zaragoza",
                    "Region" : "Ruta de Villa",
                    "Meses" : {
                        "Enero" : "1,73",
                        "Febrero" : "1,7325",
                        "Marzo" : "1,755",
                        "Abril" : "1,943333333",
                        "Mayo" : "1,60375",
                        "Junio" : "1,535",
                        "Julio" : "1,63",
                        "Agosto" : "1,8175",
                        "Septiembre" : "2,0225",
                        "Octubre" : "1,89375",
                        "Noviembre" : "2,129166667",
                        "Diciembre" : "2,267916667"
                    }
                },

                /* 50 */
                {
                    "_id" : ObjectId("5f6f87f14de9691fa1e5a7d6"),
                    "Año" : "2019",
                    "Municipio" : "Estatal",
                    "Region" : "Todas",
                    "Meses" : {
                        "Enero" : "1,65",
                        "Febrero" : "1,62",
                        "Marzo" : "1,67",
                        "Abril" : "1,67",
                        "Mayo" : "1,64",
                        "Junio" : "1,68",
                        "Julio" : "1,64",
                        "Agosto" : "1,55",
                        "Septiembre" : "1,63",
                        "Octubre" : "1,66",
                        "Noviembre" : "1,64",
                        "Diciembre" : "1,67"
                    }
                },
            ]
        };  
    }

    handleChange(event) {
        this.setState({ano: event.target.value});
    }

    handleSubmit(event) {

    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {

        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <div>
                        <Row>
                            <Col md="3">
                                <Card className="main-card mb-12">
                                    <CardHeader>
                                        <h3>Parametros</h3>
                                    </CardHeader>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="4">
                                <Card className="main-card mb-12">
                                        <CardBody>
                                            <CardTitle>Selecciona los parametros para crear el reporte</CardTitle>
                                            <Row>
                                            <Col md="12">
                                                    <FormGroup>
                                                        
                                                        <Label for="añoSelect">Año</Label>
                                                        <CustomInput type="select" id="añoSelect"
                                                                    name="añoSelect">
                                                                    <option value="None">Selecciona</option>
                                                                    <option>2020</option>
                                                                    <option>2019</option>
                                                                    <option>2018</option>
                                                                    <option>2017</option>
                                                                    <option>2016</option>
                                                                    <option>2015</option>
                                                        </CustomInput>
                                                        
                                                
                                                        <Label for="mesSelect">Mes</Label>
                                                        <CustomInput type="select" id="mesSelect"
                                                                    name="mesSelect">
                                                                    <option value="None">Selecciona</option>
                                                                    <option>Enero</option>
                                                                    <option>Febrero</option>
                                                                    <option>Marzo</option>
                                                                    <option>Abril</option>
                                                                    <option>Mayo</option>
                                                                    <option>Junio</option>
                                                                    <option>Julio</option>
                                                                    <option>Agosto</option>
                                                                    <option>Septiembre</option>
                                                                    <option>Octubre</option>
                                                                    <option>Noviembre</option>
                                                                    <option>Diciembre</option>
                                                        </CustomInput>
                                                
                                                
                                                    
                                                        <Label for="categoriaSelect">Categoria</Label>
                                                        <CustomInput type="select" id="categoriaSelect"
                                                                    name="customSelect">
                                                                    <option value="None">Selecciona</option>
                                                                    <option>Estatal</option>
                                                                    <option>5 Estrellas</option>
                                                                    <option>4 Estrellas</option>
                                                                    <option>3 Estrellas</option>
                                                                    <option>2 Estrellas</option>
                                                                    <option>1 Estrellas</option>
                                                        </CustomInput>
                                                        <Button className="mb-2 mr-2" color="success">Crear</Button>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                            </Col>
                        </Row>
                    </div>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
,}