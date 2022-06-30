import React, { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../partials/Header";

function SignUp() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://httpbin.org/post", {
        method: "POST",
        body: JSON.stringify({
          name: "user",
          email: email,
          password: password,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setEmail("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-full mx-auto px-4 sm:px-6">
            <div className="pt-8 pb-8 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-full mx-auto text-center pb-4 md:pb-4">
                <h1 className="h3">POLÍTICAS DE PRIVACIDAD TALENTO</h1>
              </div>

              <div className="max-w-full mx-20 pb-4 md:pb-4">
                <h3 className="h5">INTRODUCCIÓN</h3>
                <p>
                  La presente Política de Privacidad para la Protección de Datos
                  Personales en el ámbito de la aplicación web, describe el
                  tratamiento que nuestra institución (en adelante “Talento”)
                  brinda a los datos personales que recopila de los usuarios de
                  nuestra aplicación web. Dicha política se ajusta a las
                  disposiciones contenidas en la Ley de Protección de Datos
                  Personales, Ley N° 29733, su Reglamento y la Directiva de
                  Seguridad de la Información emitida por la autoridad
                  competente.
                </p>
              </div>
              <div className="max-w-full mx-20 pb-4 md:pb-4">
                <h3 className="h5">RECOPILACIÓN DE LA INFORMACIÓN</h3>
                <p>
                  Para efectos de visitar nuestra aplicación web usted no tiene
                  la obligación de proporcionar datos personales.
                  <br /> Sin embargo, para los casos en que desea hacer uso de
                  los servicios (almacenar información, compartir, participar de
                  convocatorios, recibir documentos, entre otros) que Talento
                  brinda, es posible que este requiera información personal
                  específica y necesaria para dicho fin. Tal información puede
                  comprender el nombre, número de documento de identidad,
                  dirección de correo electrónico, número de teléfono,
                  información académica y laboral. Asimismo, cuando la
                  naturaleza de lo solicitado así lo requiera, y en tanto sea
                  estrictamente necesario, Talento podrá requerir otros datos
                  personales.
                  <br />
                  Menores de edad
                  <br />
                  <dd className="pl-4">
                    Talento no tiene intenciones de recopilar Información
                    Personal de menores de edad. Cuando corresponda, Talento le
                    indicará específicamente a los menores que no brinden esa
                    información Personal en nuestra aplicación web y/o tomará
                    medidas razonables para obtener el consentimiento de los
                    padres, tutor o representante legal para la entrega de esa
                    Información Personal.
                  </dd>
                  <br />
                  <dd className="pl-4">
                    Le informamos que en su condición de padre, tutor legal o
                    representante será el responsable de que sus hijos menores o
                    bajo su tutela accedan a la aplicación web, por lo que
                    recomendamos enfáticamente tomar las precauciones oportunas
                    durante la navegación en la misma. A este fin, le informamos
                    que algunos navegadores permiten configurarse para que los
                    niños no puedan acceder a páginas determinadas.
                  </dd>
                </p>
              </div>
              <div className="max-w-full mx-20 pb-4 md:pb-4">
                <h3 className="h5">CONSENTIMIENTO DEL USUARIO</h3>
                <p>
                  El llenado de los formularios que nuestra aplicación web
                  requiera para efectos de presentación de solicitudes, acceso a
                  servicios, representa el consentimiento expreso del titular
                  para la recopilación de sus datos personales y para su
                  tratamiento para los fines específicos que motivaron su
                  recopilación.
                </p>
              </div>
              <div className="max-w-full mx-20 pb-4 md:pb-4">
                <h3 className="h5">
                  RESPONSABILIDAD POR LA INFORMACIÓN PROPORCIONADA
                </h3>
                <p>
                  Los datos personales que el usuario proporcione deben ser,
                  bajo su responsabilidad, verdaderos, completos, exactos,
                  vigentes y, corresponder a su verdadera identidad.
                </p>
                <p>
                  Cualquier tipo de daño o perjuicio, directo indirecto, que se
                  derive para Talento o para terceros como consecuencia del
                  incumplimiento parcial o total de la obligación referida en el
                  punto anterior, será responsabilidad única y exclusiva del
                  usuario que proporcionó la información.
                </p>
              </div>
              <div className="max-w-full mx-20 pb-4 md:pb-4">
                <h3 className="h5">TRATAMIENTO DE LA INFORMACIÓN</h3>
                <p>
                  Los datos personales proporcionados serán objeto de
                  tratamiento únicamente para la finalidad específica para la
                  que fueron suministrados.
                  <br /> Talento no empleará los datos personales del usuario
                  para ninguna finalidad distinta de la expresamente prevista en
                  la presente Política de Privacidad, a no ser que se trate de
                  una finalidad expresamente permitida o exigida por la
                  normativa vigente aplicable o que Talento haya recabado
                  previamente el debido consentimiento del usuario.
                </p>
                <p>
                  Talento no compartirá ni cederá a terceros algún dato personal
                  del usuario sin el consentimiento previo y expreso de este
                  último, salvo cuando dicha comunicación sea exigida por la
                  legislación vigente, por orden judicial o por una autoridad
                  competente.
                </p>
                <p>
                  Para prevenir acceso no autorizado, mantener la precisión de
                  los datos y asegurar el uso correcto de su Información
                  Personal, Talento ha puesto en uso ciertos medios
                  electrónicos, administrativos y procedimientos de seguridad
                  para resguardar y asegurar la Información Personal que
                  recopilamos en línea. Nosotros resguardamos la Información
                  Personal de acuerdo a estándares y procedimientos de seguridad
                  establecidos y continuamente evaluamos nueva tecnología para
                  proteger esa información. Talento garantiza que los procesos
                  internos propios de las bases de datos cumplen con las
                  obligaciones legales de seguridad y confidencialidad impuestas
                  por la ley N° 29733 en materia de privacidad y protección de
                  datos personales.
                </p>
                <p>
                  A pesar de lo anterior, usted reconoce que los medios técnicos
                  existentes que brindan seguridad no son inexpugnables y que
                  aun cuando se adopten todos los recaudos razonables de
                  seguridad es posible sufrir manipulaciones, destrucción y/o
                  pérdida de información. De presentarse estos casos, Talento
                  procederá conforme las leyes de cada país en materia de
                  privacidad y protección de datos lo requieran.
                </p>
                <p>
                  La aplicación web de Talento puede ofrecer vínculos (links)
                  para acceder a otras páginas web que no son parte de aquellos.
                  Es responsabilidad del usuario revisar las políticas de
                  privacidad en dichas páginas web para verificar el nivel de
                  protección de sus datos personales en ese ambiente, lo que es
                  ajeno a la responsabilidad de Talento.
                </p>
              </div>

              <div className="max-w-full mx-20 pb-4 md:pb-4">
                <h3 className="h5">EJERCICIO DE DERECHOS ARCO</h3>
                <p>
                  El usuario podrá ejercitar sus derechos de Información,
                  Acceso, Rectificación, Cancelación, Revocación, Oposición,
                  etc. (ARCO) al uso de sus datos personales, de conformidad con
                  la Ley de Protección de Datos Personales, Ley N° 29733. En ese
                  sentido, el usuario tiene derecho, entre otros, a acceder a su
                  información personal, a solicitar la rectificación de datos
                  inexactos y a revocar su consentimiento para el tratamiento de
                  la misma; asimismo, podrá solicitar la supresión de sus datos
                  u oponerse al tratamiento de los mismos, incluso cuando estos
                  ya no resulten necesarios para los fines que motivaron su
                  recopilación.
                </p>
                <p>
                  El ejercicio de estos derechos es gratuito. Para ello, puede
                  dirigirse por correo electrónico a datospersonales@talento.pe
                  adjuntando la “Solicitud de Atención de Derechos ARCO - Ley N°
                  29733, Ley de Protección de Datos Personales” y copia del
                  documento de identidad (DNI/CE/Pasaporte) que acredite su
                  titularidad sobre los datos personales respecto de los cuales
                  ejercerá su derecho. También podrá hacerlo en la Mesa de
                  Partes de Talento, ubicada en Av. Petit Thouars 4699,
                  Miraflores 15046.
                </p>
                <p>
                  La atención de la solicitud será efectuada de acuerdo a los
                  plazos previstos en la normatividad de protección de datos
                  personales.
                </p>
              </div>

              <div className="max-w-full mx-20 pb-4 md:pb-4">
                <h3 className="h5">
                  CAMBIOS A LA POLÍTICA DE PRIVACIDAD PARA LA PROTECCIÓN DE
                  DATOS PERSONALES
                </h3>
                <p>
                  Talento se reserva el derecho de modificar su Política de
                  Privacidad para la Protección de Datos Personales en el Ámbito
                  de la aplicación web, así como el aviso a través del cual la
                  divulga, con el objeto de adaptarla a los cambios que pueda
                  requerir el marco normativo vigente. Es responsabilidad del
                  usuario mantenerse informado de dicha política, a efectos de
                  lo cual, en cada oportunidad en que haga uso de nuestra
                  aplicación web, deberá consultar nuestro Aviso de Política de
                  Privacidad para la Protección de Datos Personales en el Ámbito
                  de la aplicación web.
                </p>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto"></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SignUp;
