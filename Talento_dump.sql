--
-- PostgreSQL database dump
--

-- Dumped from database version 12.9 (Ubuntu 12.9-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 14.2 (Ubuntu 14.2-1.pgdg21.10+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE IF EXISTS gestion5_talento_db;
--
-- Name: gestion5_talento_db; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE gestion5_talento_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'C.UTF-8';


ALTER DATABASE gestion5_talento_db OWNER TO postgres;

\connect gestion5_talento_db

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: añofinacademico; Type: TABLE; Schema: public; Owner: gestion5
--

CREATE TABLE public."añofinacademico" (
    idfinacademico integer NOT NULL,
    finacademico date
);


ALTER TABLE public."añofinacademico" OWNER TO gestion5;

--
-- Name: añoinicioacademico; Type: TABLE; Schema: public; Owner: gestion5
--

CREATE TABLE public."añoinicioacademico" (
    idinicioacademico integer NOT NULL,
    inicioacademico date
);


ALTER TABLE public."añoinicioacademico" OWNER TO gestion5;

--
-- Name: formacionpostgrado; Type: TABLE; Schema: public; Owner: gestion5
--

CREATE TABLE public.formacionpostgrado (
    idformacionpostgrado integer NOT NULL,
    nombreformacionpostgrado character varying(50)
);


ALTER TABLE public.formacionpostgrado OWNER TO gestion5;

--
-- Name: formacionpregrado; Type: TABLE; Schema: public; Owner: gestion5
--

CREATE TABLE public.formacionpregrado (
    idformacionpregrado integer NOT NULL,
    nombreformacionpregrado character varying(50)
);


ALTER TABLE public.formacionpregrado OWNER TO gestion5;

--
-- Name: formacionsubpostgrado; Type: TABLE; Schema: public; Owner: gestion5
--

CREATE TABLE public.formacionsubpostgrado (
    idsubpostgrado integer NOT NULL,
    nombresubpostgrado character varying(50)
);


ALTER TABLE public.formacionsubpostgrado OWNER TO gestion5;

--
-- Name: sectorempresarial_idsectorempresarial_seq; Type: SEQUENCE; Schema: public; Owner: gestion5
--

CREATE SEQUENCE public.sectorempresarial_idsectorempresarial_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sectorempresarial_idsectorempresarial_seq OWNER TO gestion5;

--
-- Name: sectorempresarial; Type: TABLE; Schema: public; Owner: gestion5
--

CREATE TABLE public.sectorempresarial (
    idsectorempresarial integer DEFAULT nextval('public.sectorempresarial_idsectorempresarial_seq'::regclass) NOT NULL,
    nombresectorempresarial character varying(50) NOT NULL
);


ALTER TABLE public.sectorempresarial OWNER TO gestion5;

--
-- Name: selecformacioncontinua; Type: TABLE; Schema: public; Owner: gestion5
--

CREATE TABLE public.selecformacioncontinua (
    idselecformacioncontinua integer NOT NULL,
    nombreselecformacioncontinua character varying(50) NOT NULL
);


ALTER TABLE public.selecformacioncontinua OWNER TO gestion5;

--
-- Name: tb_acercadeti_consultor_idpostulante_seq; Type: SEQUENCE; Schema: public; Owner: gestion5
--

CREATE SEQUENCE public.tb_acercadeti_consultor_idpostulante_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 125;


ALTER TABLE public.tb_acercadeti_consultor_idpostulante_seq OWNER TO gestion5;

--
-- Name: tb_acercadeti_consultor; Type: TABLE; Schema: public; Owner: gestion5
--

CREATE TABLE public.tb_acercadeti_consultor (
    idpostulante integer DEFAULT nextval('public.tb_acercadeti_consultor_idpostulante_seq'::regclass) NOT NULL,
    primernombre character varying(50),
    segundonombre character varying(50),
    apellidopaterno character varying(50),
    apellidomaterno character varying(50),
    iddocumento integer,
    numerodedocumento integer,
    fechadenacimiento date,
    numerocelular1 integer,
    numerocelular2 integer,
    distrito character varying(50),
    provincia character varying(50),
    region character varying(50),
    direccion character varying(50),
    expectativasueldo integer,
    cvpostulante character varying,
    email character varying NOT NULL,
    pais character varying,
    photo text,
    disclaimer integer
);


ALTER TABLE public.tb_acercadeti_consultor OWNER TO gestion5;

--
-- Name: tb_carrerauniversitaria_idcarrea_seq; Type: SEQUENCE; Schema: public; Owner: gestion5
--

CREATE SEQUENCE public.tb_carrerauniversitaria_idcarrea_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tb_carrerauniversitaria_idcarrea_seq OWNER TO gestion5;

--
-- Name: tb_carrerauniversitaria; Type: TABLE; Schema: public; Owner: gestion5
--

CREATE TABLE public.tb_carrerauniversitaria (
    idcarrea integer DEFAULT nextval('public.tb_carrerauniversitaria_idcarrea_seq'::regclass) NOT NULL,
    nombrecarrera character varying(50)
);


ALTER TABLE public.tb_carrerauniversitaria OWNER TO gestion5;

--
-- Name: tb_experiencialaboral_idexperiencialaboral_seq; Type: SEQUENCE; Schema: public; Owner: gestion5
--

CREATE SEQUENCE public.tb_experiencialaboral_idexperiencialaboral_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 125;


ALTER TABLE public.tb_experiencialaboral_idexperiencialaboral_seq OWNER TO gestion5;

--
-- Name: tb_experiencialaboral; Type: TABLE; Schema: public; Owner: gestion5
--

CREATE TABLE public.tb_experiencialaboral (
    idexperiencialaboral integer DEFAULT nextval('public.tb_experiencialaboral_idexperiencialaboral_seq'::regclass) NOT NULL,
    experienciafechainicio date,
    experienciafechafinal date,
    funcionesdesarrolladas text,
    certificadopostulante character varying,
    nombrecargo character varying(255),
    nombreempresa character varying(255),
    sectorempresarial character varying,
    email character varying NOT NULL,
    funcion2 text,
    funcion3 text,
    funcion4 text,
    funcion5 text
);


ALTER TABLE public.tb_experiencialaboral OWNER TO gestion5;

--
-- Name: tb_formacioncontinua_idformacioncontinua_seq; Type: SEQUENCE; Schema: public; Owner: gestion5
--

CREATE SEQUENCE public.tb_formacioncontinua_idformacioncontinua_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tb_formacioncontinua_idformacioncontinua_seq OWNER TO gestion5;

--
-- Name: tb_formacioncontinua; Type: TABLE; Schema: public; Owner: gestion5
--

CREATE TABLE public.tb_formacioncontinua (
    idformacioncontinua integer DEFAULT nextval('public.tb_formacioncontinua_idformacioncontinua_seq'::regclass) NOT NULL,
    nombrelogro character varying(255) NOT NULL,
    institucioneducativa character varying(255) NOT NULL,
    horasacademicas integer,
    formacioncontinuadocumento character varying,
    fechaexpedicion date,
    idselecformacioncontinua integer,
    email character varying NOT NULL
);


ALTER TABLE public.tb_formacioncontinua OWNER TO gestion5;

--
-- Name: tb_formacioninicial_idformacioninicial_seq; Type: SEQUENCE; Schema: public; Owner: gestion5
--

CREATE SEQUENCE public.tb_formacioninicial_idformacioninicial_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 125;


ALTER TABLE public.tb_formacioninicial_idformacioninicial_seq OWNER TO gestion5;

--
-- Name: tb_formacioninicial; Type: TABLE; Schema: public; Owner: gestion5
--

CREATE TABLE public.tb_formacioninicial (
    idformacioninicial integer DEFAULT nextval('public.tb_formacioninicial_idformacioninicial_seq'::regclass) NOT NULL,
    universidad character varying(255),
    carrerauniversitaria character varying(255),
    fechaexpediciontitulo date,
    documentotitulo character varying,
    documentocolegiado character varying,
    erescolegiado integer,
    ultimacarrera integer,
    idtipodeformacion integer,
    idformacionpregrado integer,
    idformacionpostgrado integer,
    idsubpostgrado integer,
    email character varying NOT NULL,
    inicioacademico integer,
    finacademico integer
);


ALTER TABLE public.tb_formacioninicial OWNER TO gestion5;

--
-- Name: tb_habilidades_consultor_idconsultor_seq; Type: SEQUENCE; Schema: public; Owner: gestion5
--

CREATE SEQUENCE public.tb_habilidades_consultor_idconsultor_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tb_habilidades_consultor_idconsultor_seq OWNER TO gestion5;

--
-- Name: tb_habilidades_consultor; Type: TABLE; Schema: public; Owner: gestion5
--

CREATE TABLE public.tb_habilidades_consultor (
    idconsultor integer DEFAULT nextval('public.tb_habilidades_consultor_idconsultor_seq'::regclass) NOT NULL,
    email character varying NOT NULL,
    comunicativas integer,
    equipo integer,
    iniciativas integer,
    puntualidad integer,
    pensamiento integer
);


ALTER TABLE public.tb_habilidades_consultor OWNER TO gestion5;

--
-- Name: tb_institucioneducativa_idinstitucion_seq; Type: SEQUENCE; Schema: public; Owner: gestion5
--

CREATE SEQUENCE public.tb_institucioneducativa_idinstitucion_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tb_institucioneducativa_idinstitucion_seq OWNER TO gestion5;

--
-- Name: tb_institucioneducativa; Type: TABLE; Schema: public; Owner: gestion5
--

CREATE TABLE public.tb_institucioneducativa (
    idinstitucion integer DEFAULT nextval('public.tb_institucioneducativa_idinstitucion_seq'::regclass) NOT NULL,
    nombreinstitucion character varying(50)
);


ALTER TABLE public.tb_institucioneducativa OWNER TO gestion5;

--
-- Name: tb_tipodedocumento; Type: TABLE; Schema: public; Owner: gestion5
--

CREATE TABLE public.tb_tipodedocumento (
    iddocumento integer NOT NULL,
    nombredocumento character varying(50)
);


ALTER TABLE public.tb_tipodedocumento OWNER TO gestion5;

--
-- Name: tb_universidad_iduniversidad_seq; Type: SEQUENCE; Schema: public; Owner: gestion5
--

CREATE SEQUENCE public.tb_universidad_iduniversidad_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tb_universidad_iduniversidad_seq OWNER TO gestion5;

--
-- Name: tb_universidad; Type: TABLE; Schema: public; Owner: gestion5
--

CREATE TABLE public.tb_universidad (
    iduniversidad integer DEFAULT nextval('public.tb_universidad_iduniversidad_seq'::regclass) NOT NULL,
    nombreuniversidad character varying(50)
);


ALTER TABLE public.tb_universidad OWNER TO gestion5;

--
-- Name: tip_doc; Type: TABLE; Schema: public; Owner: gestion5
--

CREATE TABLE public.tip_doc (
    id integer NOT NULL,
    ti_documento character varying
);


ALTER TABLE public.tip_doc OWNER TO gestion5;

--
-- Name: tipodeformacioninicial; Type: TABLE; Schema: public; Owner: gestion5
--

CREATE TABLE public.tipodeformacioninicial (
    idtipodeformacion integer NOT NULL,
    nombreformacioninicial character varying(50)
);


ALTER TABLE public.tipodeformacioninicial OWNER TO gestion5;

--
-- Name: tipousu; Type: TABLE; Schema: public; Owner: gestion5
--

CREATE TABLE public.tipousu (
    idtipusu integer NOT NULL,
    tipusu character varying
);


ALTER TABLE public.tipousu OWNER TO gestion5;

--
-- Name: tipousu_idtipusu_seq; Type: SEQUENCE; Schema: public; Owner: gestion5
--

CREATE SEQUENCE public.tipousu_idtipusu_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tipousu_idtipusu_seq OWNER TO gestion5;

--
-- Name: tipousu_idtipusu_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gestion5
--

ALTER SEQUENCE public.tipousu_idtipusu_seq OWNED BY public.tipousu.idtipusu;


--
-- Name: users; Type: TABLE; Schema: public; Owner: gestion5
--

CREATE TABLE public.users (
    idusu integer NOT NULL,
    tipusu integer NOT NULL,
    nom_usu character varying NOT NULL,
    email character varying NOT NULL,
    num_cell integer,
    password character varying NOT NULL,
    b_sesion integer DEFAULT 1 NOT NULL,
    created_se date DEFAULT ('now'::text)::date NOT NULL,
    fecha_ult_se date,
    password_token character varying(255),
    log_token character varying(255),
    time_token character varying(255)
);


ALTER TABLE public.users OWNER TO gestion5;

--
-- Name: users_idusu_seq; Type: SEQUENCE; Schema: public; Owner: gestion5
--

CREATE SEQUENCE public.users_idusu_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_idusu_seq OWNER TO gestion5;

--
-- Name: users_idusu_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gestion5
--

ALTER SEQUENCE public.users_idusu_seq OWNED BY public.users.idusu;


--
-- Name: tipousu idtipusu; Type: DEFAULT; Schema: public; Owner: gestion5
--

ALTER TABLE ONLY public.tipousu ALTER COLUMN idtipusu SET DEFAULT nextval('public.tipousu_idtipusu_seq'::regclass);


--
-- Name: users idusu; Type: DEFAULT; Schema: public; Owner: gestion5
--

ALTER TABLE ONLY public.users ALTER COLUMN idusu SET DEFAULT nextval('public.users_idusu_seq'::regclass);


--
-- Data for Name: añofinacademico; Type: TABLE DATA; Schema: public; Owner: gestion5
--



--
-- Data for Name: añoinicioacademico; Type: TABLE DATA; Schema: public; Owner: gestion5
--



--
-- Data for Name: formacionpostgrado; Type: TABLE DATA; Schema: public; Owner: gestion5
--

INSERT INTO public.formacionpostgrado VALUES (1, 'Maestría');
INSERT INTO public.formacionpostgrado VALUES (2, 'Doctorado');
INSERT INTO public.formacionpostgrado VALUES (0, '');


--
-- Data for Name: formacionpregrado; Type: TABLE DATA; Schema: public; Owner: gestion5
--

INSERT INTO public.formacionpregrado VALUES (1, 'Estudiante');
INSERT INTO public.formacionpregrado VALUES (2, 'Egresado');
INSERT INTO public.formacionpregrado VALUES (3, 'Bachiller');
INSERT INTO public.formacionpregrado VALUES (4, 'Titulado');
INSERT INTO public.formacionpregrado VALUES (0, '');


--
-- Data for Name: formacionsubpostgrado; Type: TABLE DATA; Schema: public; Owner: gestion5
--

INSERT INTO public.formacionsubpostgrado VALUES (1, 'Estudiante');
INSERT INTO public.formacionsubpostgrado VALUES (2, 'Egresado');
INSERT INTO public.formacionsubpostgrado VALUES (3, 'Titulado');
INSERT INTO public.formacionsubpostgrado VALUES (0, '');


--
-- Data for Name: sectorempresarial; Type: TABLE DATA; Schema: public; Owner: gestion5
--



--
-- Data for Name: selecformacioncontinua; Type: TABLE DATA; Schema: public; Owner: gestion5
--

INSERT INTO public.selecformacioncontinua VALUES (3, 'Idioma');
INSERT INTO public.selecformacioncontinua VALUES (2, 'Especialización');
INSERT INTO public.selecformacioncontinua VALUES (1, 'Curso');
INSERT INTO public.selecformacioncontinua VALUES (4, 'Certificación');
INSERT INTO public.selecformacioncontinua VALUES (5, 'Taller / Capacitación');
INSERT INTO public.selecformacioncontinua VALUES (6, 'Diplomados');


--
-- Data for Name: tb_acercadeti_consultor; Type: TABLE DATA; Schema: public; Owner: gestion5
--

INSERT INTO public.tb_acercadeti_consultor VALUES (3255, 'Luis', '', 'Fernandez', 'Fernandez', 1, 4648464, NULL, 98789778, NULL, '', '', '', '', NULL, NULL, 'luisferna@gmail.com', '', NULL, NULL);
INSERT INTO public.tb_acercadeti_consultor VALUES (3755, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'lorenaricse.lr@gmail.com', NULL, NULL, NULL);
INSERT INTO public.tb_acercadeti_consultor VALUES (3756, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'jriospeceros@gmail.com', NULL, NULL, NULL);
INSERT INTO public.tb_acercadeti_consultor VALUES (3757, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'martin.rengifod@pucp.edu.pe', NULL, NULL, NULL);
INSERT INTO public.tb_acercadeti_consultor VALUES (3758, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'patyretto@gmail.com', NULL, NULL, NULL);
INSERT INTO public.tb_acercadeti_consultor VALUES (3759, 'María', 'Isabel', 'Sanchez', 'Ayvar', 1, 75442903, NULL, 989532705, NULL, 'Callao', 'Lima', 'Lima', NULL, NULL, NULL, 'sanchez.isabel0609@gmail.com', NULL, NULL, NULL);
INSERT INTO public.tb_acercadeti_consultor VALUES (3760, 'Jackeline', 'Margot', 'Miranda', 'Falcon', 1, 40208056, '1979-06-13', 989171925, NULL, 'Los Olivos', 'Lima', 'Lima', NULL, NULL, NULL, 'mirandajackeline1306@gmail.com', NULL, NULL, NULL);
INSERT INTO public.tb_acercadeti_consultor VALUES (3761, 'Alberto', NULL, 'Silva', 'Orellana', 1, 72701973, '1997-07-30', 945963832, NULL, 'Surco', 'Lima', 'Lima', NULL, NULL, NULL, 'aaso18@hotmail.com', NULL, NULL, NULL);
INSERT INTO public.tb_acercadeti_consultor VALUES (3763, 'Kelly', 'Lisbeth', 'Jara', 'Gomez', 1, 48333219, '1994-08-19', 961690392, NULL, 'Puente Piedra', 'Lima', 'Lima', NULL, NULL, NULL, 'Lisbeth.jgsoc@gmail.com', NULL, NULL, NULL);
INSERT INTO public.tb_acercadeti_consultor VALUES (3764, 'Juan', 'César', 'Aldea', 'Mendoza', 1, 72199908, NULL, 963755853, NULL, 'Puente Piedra', 'Lima', 'Lima', NULL, NULL, NULL, 'cesar.aldea@pucp.edu.pe', NULL, NULL, NULL);
INSERT INTO public.tb_acercadeti_consultor VALUES (4005, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'freen2331@gmail.com', NULL, NULL, NULL);
INSERT INTO public.tb_acercadeti_consultor VALUES (4131, 'Daniel', NULL, 'Jesús', 'Ccori', 1, 10586264, NULL, 976076434, NULL, 'Cercado de Lima', 'Lima', 'Lima', 'Jr. Garcia Villon 671, Torre T, Dpto 104 ', NULL, NULL, 'djesusccori@gmail.com', NULL, NULL, NULL);
INSERT INTO public.tb_acercadeti_consultor VALUES (4132, 'Fiorella', 'Sthefany', 'Rojas', 'Angulo', 1, 72700182, '1997-07-29', 957937363, NULL, 'San Martín  de  Porres ', 'Lima', 'Lima', ' Jr .  Pasco  4112 ', NULL, NULL, 'tefa1997.fsra@gmail.com', NULL, NULL, NULL);
INSERT INTO public.tb_acercadeti_consultor VALUES (4134, 'Natalia', 'Lucero', 'Rios', 'López', 1, 73257262, '1996-08-07', 997323622, NULL, 'Bellavista', 'Callao', 'Callao', 'Jr. Carlos M. de la condamine Urb. San Jose N. 364', NULL, NULL, '7.nataliarioslo@gmail.com', NULL, NULL, NULL);
INSERT INTO public.tb_acercadeti_consultor VALUES (4130, 'Grace', 'Alejandra', 'López', 'Llosa', 1, 73696147, '1997-03-25', 923141716, NULL, 'San Juan de Lurigancho', 'Lima', 'Lima', 'Jiròn Joaquìn Ynclan Mz  D5 Lt 21', NULL, NULL, 'glopezllosa@gmail.com', '', NULL, NULL);
INSERT INTO public.tb_acercadeti_consultor VALUES (4135, 'Verónica', 'Yazmin Melani', 'Criollo', 'Cartulin', 1, 75283350, '1999-09-07', 948888335, NULL, 'Los Olivos', 'Lima', 'Lima', 'Calle 23 Mz. H Lt. 8 Urb. El Trebol', NULL, NULL, 'veronica.07.cc@gmail.com', 'Perú', NULL, 1);
INSERT INTO public.tb_acercadeti_consultor VALUES (3762, 'Natalia', 'Lucero', 'O´Hara', 'Pareja - Lecaros', 1, 72874754, '1997-05-24', 949344041, NULL, 'Miraflores', 'Lima', 'Lima', '', NULL, NULL, 'fatimaohara24@gmail.com', '', NULL, 1);
INSERT INTO public.tb_acercadeti_consultor VALUES (4133, 'Jorge', 'Luis', 'Collazos', 'Martínez', 1, 71930040, '2002-05-13', 983593021, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'jorgecollaz@gmail.com', NULL, 'data:image/jpeg;base64,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', 1);


--
-- Data for Name: tb_carrerauniversitaria; Type: TABLE DATA; Schema: public; Owner: gestion5
--



--
-- Data for Name: tb_experiencialaboral; Type: TABLE DATA; Schema: public; Owner: gestion5
--

INSERT INTO public.tb_experiencialaboral VALUES (1377, NULL, '2019-02-11', 'Servicio  de apoyo para la supervisión en el marco del DU 59-2020', NULL, 'Consultor', 'INDECOPI', NULL, 'aaso18@hotmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1380, '2012-08-01', '2013-08-30', 'Asistir en las actividades de Difusión y sensibilización del proyecto.  2. Diseñar e implementar estrategias de comunicación para temas culturales. 3. Coordinar la programación de los servicios bibliotecarios y culturales. 4. Colaborar en la elaboración de informes y entregables.', NULL, 'Consultora', 'GESTIONA Y APRENDE SAC', NULL, 'mirandajackeline1306@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1381, '2010-12-02', '2012-12-30', 'Proyecto: Investigación de Mercado de plantas aromáticas en el cono norte de Lima', NULL, 'Consultor de Proyecto', 'CONSULTORIA', NULL, 'mirandajackeline1306@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1382, '2007-12-26', '2010-01-26', 'La Quinua', NULL, 'Consultor de Proyecto', 'AYNI SAC', NULL, 'mirandajackeline1306@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1383, '2006-12-26', '2007-06-30', NULL, NULL, 'Consultora Empresarial', 'RECURSOS S.A.C.', NULL, 'mirandajackeline1306@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1384, '2001-09-08', '2002-01-07', 'Evaluación de un proyecto de atención a campesinos reubicados de parte de una gran empresa minera', NULL, 'Consultora ', 'RECURSOS S.A.C.', NULL, 'mirandajackeline1306@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1385, '2001-01-01', '2001-08-31', NULL, NULL, 'Consultor/Asistente', 'MINISTERIO DEL INTERIOR', NULL, 'mirandajackeline1306@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1386, '2002-03-12', '2002-05-10', NULL, NULL, 'Asistente', 'ESTUDIO JURIDICO NARCISO LEYVA CANALES', NULL, 'mirandajackeline1306@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1387, '2021-01-04', '2021-07-19', NULL, NULL, 'Consultor/Asistente', 'MINISTERIO DEL INTERIOR', NULL, 'mirandajackeline1306@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1388, '2021-03-01', '2021-12-31', 'Coordinadoradel control de calidad, monitoreo y  validación de la información técnica de los IEST referida amapas georreferenciados. Apoyaren las actividades establecidas en el TDR. Monitorear el  cumplimiento  de  las actividades establecidas en el Diagrama de Gant. Brindar asistencia técnica y administrativa   directa   al   jefe   del proyecto. Organizar y     participarde     las reuniones   de   coordinación   con   el equipo    técnico del    proyecto    y entidad contratante. Brindar  apoyo  en el  seguimiento de los pagos  de facturas  y  aprobación de entregables.Otras  actividades  encargadas  por  el jefe del proyecto.', NULL, 'Consultora ', 'GESTIONA Y APRENDE SAC', NULL, 'mirandajackeline1306@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1389, '2019-02-01', '2019-08-06', NULL, NULL, 'Docente', 'COLEGIO CRISTIANO JERUSALEN', NULL, 'sanchez.isabel0609@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1390, '2019-03-05', '2019-12-20', NULL, NULL, 'Profesora Auxiliar de Inicial', 'CENTRO EDUCATIVO DE GESTION NO ESTATAL "SANTA ANA"', NULL, 'sanchez.isabel0609@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1391, '2019-01-01', '2019-03-31', NULL, NULL, 'Docente', 'INSTITUCION EDUCATIVA PRIVADA MI DULCE CARITO', NULL, 'sanchez.isabel0609@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1392, '2021-12-15', '2021-12-16', NULL, NULL, 'Encargada del área de investigación', 'PONTIFICIA UNIVERSIDAD CATOLICA DEL PERU', NULL, 'sanchez.isabel0609@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1393, '2020-03-10', '2020-12-15', NULL, NULL, 'Profesora Taller de Arte', 'COLEGIO SAN JORGE DE MIRAFLORES S.C.R.L', NULL, 'sanchez.isabel0609@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1394, '2020-06-01', '2020-11-30', NULL, NULL, 'Consultora/Asistente', 'INSTITUCION EDUCATIVA INICIAL N° 059 ANDRES BELLO', NULL, 'sanchez.isabel0609@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1395, '2019-03-01', '2020-03-31', ' “Servicio de elaboración de sistematización análisis de resultados del proceso de implementación del piloto de la Escuela Energética para Mujeres; y diseño de una propuesta para su masificación en el Perú” . Realizó sistematización y recojo de información y elaboración de reportes.  Mapeo de actores estratégicos del sector público, privado, ONG y cooperación internacional, así como una revisión de las fuentes de financiamiento y fondos verdes.', NULL, 'Asistente', 'DIRECCION DE EFICIENCIA ENERGETICA (DEE) DEL MINISTERIO DE ENERGIA Y MINAS (MINEM)', NULL, 'cesar.aldea@pucp.edu.pe', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1396, '2019-01-16', '2019-03-04', 'Coordinación y ejecución de las sesiones y dinámicas "Pásala"; elaboración de resportes y evaluación de avances mensuales; talleres de capacitación y supervisión del trabajo a los alumnos de secundaria que formaron parte del subproyecto "Capitanes pásala"', NULL, 'Profesor de Futbol', 'ASOCIACION CIVIL', NULL, 'cesar.aldea@pucp.edu.pe', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1397, NULL, '2018-11-21', 'Desarrollador, encuestador y procesador de la información', NULL, 'Asesor y Consultor', 'LUIS CARLOS DANIEL VELA HIDALGO', NULL, 'cesar.aldea@pucp.edu.pe', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1398, '2020-04-15', '2020-10-03', 'Aplicador de lso cuestionarios de trabajo en equipo y aprendizaje autonomo', NULL, 'Asistente/ Consultor', 'PONTIFICIA UNIVERSIDAD CATOLICA DEL PERU', NULL, 'cesar.aldea@pucp.edu.pe', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1399, '2015-09-03', '2015-09-13', 'Enseñar el curso de razonamiento verbal y de educación civica a 3er grado de secundaria', NULL, 'Docente', 'AYNI EDUCATIVO', NULL, 'cesar.aldea@pucp.edu.pe', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1400, '2015-08-05', '2015-08-08', 'Voluntariado en el Programa de sostenibilidad ambienal mistura 2015', NULL, 'Voluntario Orientador Ambiental', 'MISTURA APEGA', NULL, 'Lisbeth.jgsoc@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1401, '2014-09-01', '2014-09-05', 'Pueblos en movimeinto: un nuevo dialogo en las ciencias sociales', NULL, 'Equipo Coordinador', 'ENCUENTRO PRE-ALAS PERU 2015', NULL, 'Lisbeth.jgsoc@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1402, '2017-03-27', '2017-12-20', 'Sociología hoy: Nuevas demandas en política, género y educación', NULL, 'Coordinador', 'UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS', NULL, 'Lisbeth.jgsoc@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1403, '2015-12-09', '2015-12-10', 'Elaboración, ejucución y monitoreo del proyecto "Escuelas para el buen vivir"', NULL, 'Consultor', 'POLICIA NACIONAL DEL PERU', NULL, 'Lisbeth.jgsoc@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1404, '2013-10-01', '2014-10-31', 'Nuevos documentos de gestión para el tránsito de una entidad pública al regimen del servicio civil.  Realizar el armado de la mesa de registro, ubicación de los banner, paneles de letras para al mesa de registro, habilitar el material de los participantes, ubicarse en sus posiciones de trabajo, entre otras similares que seran señaladas días previos al evento, durante la entrega del protocolo. Recepcionar y dirigir a los participantes de la conferencia. Realizar el registro de los participantes en la mesa principal. Coordinar y organizar el evento junto al lider del equipo. Apoyar a los participantes durante el servicio del coffe break. Realizar la entrega del formato de preguntas y su correspondiente recojo durante el desarrollo de la conferencia. Contrstar la asistencia con las constancias de participación. Coordinar la impresión de constancias adicionales. Efectuar la entrega de constancias de participación de finalizar la conferencia.', NULL, 'Consultor', 'S&R CONSULTING SOCIETE', NULL, 'Lisbeth.jgsoc@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1379, '2020-01-13', '2020-11-30', 'Participo voluntariamente en la Feria Como Jugando', '1645804529522.pdf', 'Voluntaria', 'ASOCIACIÓN EDUCATIVA CARITAS GRACIOSAS', '', 'fatimaohara24@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1405, '2020-05-01', '2020-08-31', NULL, NULL, 'Secretaria de Economia', 'UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS', NULL, 'Lisbeth.jgsoc@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1406, '2020-01-20', '2020-04-30', 'Aplicación de instrumentos cuantitativos y cualitativos. Elaboración de insumos para la capacitación de aplicadores. Recopilación de información primaria aplicando instrumentos cuantitativos a tarvés de llamadas telefónicas y encuestas online. Apoyo en la revisión de instrumentos cualitativos y cuantitativos. Actualización de base de datos a través de llamadas telefónicas. Redacción de reportes de avance y de informes. ', NULL, 'Auxiliar de Investigación', 'GESTIONA Y APRENDE SAC', NULL, 'Lisbeth.jgsoc@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1407, '2018-03-09', '2018-12-29', 'Supervisar el trabajo de campo. Asistir a los investigadores principales en el proceso de recojo de información secundaria. Coordinación de actividades para el levantamiento de información primaria. Apoyo en la elaboraación de instrumentos cuantitativos y cualitativos. ', NULL, 'Auxiliar de Investigación', 'GESTIONA Y APRENDE SAC', NULL, 'Lisbeth.jgsoc@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1408, NULL, '2014-11-12', 'Enseñanza alumnos de primaria', NULL, 'Profesora', 'ADRIAN SCHOOL SAC', NULL, 'Lisbeth.jgsoc@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1409, NULL, NULL, 'Jornada de estudios sobre violencia e inseguridad ciudadana en el Perú', NULL, 'Asistente', 'ESCUELA ACADEMICA PROFESIONAL DE SOCIOLOGIA UNMSM', NULL, 'Lisbeth.jgsoc@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1378, NULL, '2018-11-01', 'Diseño conjunto con el equipo de voluntariado la propuesta metodológica y los contenidos de los talleres como "Jugando".  Participación de las inducciones, contextualizaciones y capacitaciones realizadas previas a los trabajos de campo.  Colaboración logística previa al trabajo de campo (compra y traslado de materiales para los talleres).  Facilitación de talleres in situ dirigidos a 60 niños/niñasy pre-adolescentes.  Participación de las reuniones de la Mesa Interdisciplinaria Sacsamarca convocada por la coordinación del convenio Sacsamarca.  Realización de reportes grupales para sistematización de las experiencias de campo. Participando de la reunión de cierre y balance de Voluntariado RSU en Sacsamarca y retroalimentando la propuesta de voluntariado a partir de su experiencia.', '1645804705561.pdf', 'Voluntaria', 'PONTIFICIA UNIVERSIDAD CATOLICA DEL PERU', '', 'fatimaohara24@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1628, NULL, '2020-12-05', 'Proceso de selección de personal para la convocatoria de la Asociación Peruana de Geomática, infraestructura Vial y transporte- AGEVIT de manera virtual.', NULL, 'Voluntaria proceso de selección', 'FEDERACIÓN DE ESTUDIANTES DE PSICOLOGÍA', NULL, 'veronica.07.cc@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1629, '2020-08-01', '2020-11-30', NULL, NULL, 'Voluntaria proceso de selección', 'FEDERACIÓN DE ESTUDIANTES DE PSICOLOGÍA', NULL, 'veronica.07.cc@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1630, '2020-09-09', '2021-05-31', 'Área de Recursos Humanos', NULL, 'Asistente ', 'MECHANICAL AND PIPING SOLUTIONS SAC', NULL, 'veronica.07.cc@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1631, '2021-03-15', '2021-12-17', 'Publicaciones de ofertas laborales en bolsas de trabajo.  Captación de postulantes a través de Redes Sociales. Contacto y entrevista telefónica con postulantes. Entrevistas masivas con postulantes. Dinámicas de evaluación por competencias. Subir la información correspondiente al Sistema ERP. ', NULL, 'Apoyo', 'INFORZA', NULL, 'veronica.07.cc@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1632, '2018-09-01', '2021-12-31', 'Asistente del área de Gestión de Oportunidades. Funciones: Coordinar y dirigir el desarrollo de las reuniones del Comité de Gestión de Oportunidades (dos veces por semana). Gestionar la cartera de consultores. Gestionar la cartera de socios estratégicos. Identificar las oportunidades de consultoría a través del SEACE, páginas de programas y/o proyectos financiados por el BID, entre otras fuentes.  Gestionar el proceso de elaboración de las propuestas técnicas y económicas. Preparar los documentos para el perfeccionamiento de contratos de prestación de servicios. Mantener actualizado y monitorear el estado de los procesos de las propuestas en el Monday.com. Realizar análisis y sistematización de información.  Preparar presentaciones/informes para las reuniones con socios estratégicos. Preparar documentación e información para el proceso de negociación con los clientes. Preparar el reporte mensual del área. Gestionar la documentación generada en la fase de identificación, preparación de propuestas y negociación de los proyectos; mantener organizado y actualizado la documentación (en el OneDrive). ', NULL, 'Asistente ', 'GESTIONA Y APRENDE SAC', NULL, 'tefa1997.fsra@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1633, '2020-01-01', '2021-11-30', 'Encargada y Jefa de Gestión de Oportunidades. Funciones: Coordinar y dirigir el desarrollo de las reuniones del Comité de Gestión de Oportunidades (dos veces por semana). Gestionar la cartera de consultores. Gestionar la cartera de socios estratégicos. Identificar las oportunidades de consultoría a través del SEACE, páginas de programas y/o proyectos financiados por el BID, entre otras fuentes.  Gestionar el proceso de elaboración de las propuestas técnicas y económicas. Preparar los documentos para el perfeccionamiento de contratos de prestación de servicios. Mantener actualizado y monitorear el estado de los procesos de las propuestas en el Monday.com. Realizar análisis y sistematización de información.  Preparar presentaciones/informes para las reuniones con socios estratégicos. Preparar documentación e información para el proceso de negociación con los clientes. Preparar el reporte mensual del área. Gestionar la documentación generada en la fase de identificación, preparación de propuestas y negociación de los proyectos; mantener organizado y actualizado la documentación (en el OneDrive). ', NULL, 'Encargada y Jefa ', 'GESTIONA Y APRENDE SAC', NULL, 'tefa1997.fsra@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1634, '2018-09-18', '2019-06-30', NULL, NULL, 'Asistente Administrativo', 'GESTIONA Y APRENDE SAC', NULL, 'tefa1997.fsra@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1635, '2017-10-13', '2017-12-31', 'Servicio de consultoría para diseñar y fortalecer los sistemas de seguimiento académico, retención y culminación de estudios para institutos de educación superior".  Cumplir las políticas, normas y procedimientos establecidos por la empresa. Mantener actualizadas los archivos físicos y la base de datos, sobre las facturas generales, ingreso y egreso de caja y banco, clasificándolos cada de una de ellas por proyectos correspondientes. Responsable de Recepcionar, registrar y distribuir la correspondencia a la Gerencia. Uso de Microsoft, Word y Excel. ', NULL, 'Asistente Administrativo', 'GESTIONA Y APRENDE SAC', NULL, 'tefa1997.fsra@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1627, '2020-09-01', '2020-12-31', 'Programa Lab Social. Contribuyo en la organización social, enlazando, pueda reinventarse y multiplicar su impacto social y ambiental utilizando la metodología de Design Thinking.', NULL, 'Consultor ', 'BECAS BCP', '', 'jorgecollaz@gmail.com', 'Programa Lab Social. Contribuyo en la organización social, enlazando, pueda reinventarse y multiplicar su impacto social y ambiental utilizando la metodología de Design Thinking.', '', '', '');
INSERT INTO public.tb_experiencialaboral VALUES (1636, '1999-01-01', '2003-12-31', 'Consultor en el Estudio de Evaluación deResultados de la Capacitación Docente en el Nivel de Educación Secundaria - Periodo 1999-2003', NULL, 'Consultor', 'ESAN', NULL, 'djesusccori@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1637, NULL, NULL, 'Miembro del Proyecto de Investigación UNFV - CONCYTEC CORREDORES ECONÓMICOS Y DESCENTRALIZACIÓN, que se viene ejecutando con Municipalidades interesadas en la Promoción Empresarial para el Desarrollo Local', NULL, 'Investigador', 'UNIVERSIDAD NACIONAL FEDERICO VILLAREAL', NULL, 'djesusccori@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1638, '2007-12-01', '2009-07-15', 'Responsable de Planeamiento Estratégico y Financiero en la Oficina de Lima del Proyecto AprenDes, Innovaciones en Descentralización  y Escuelas Activas', NULL, 'Responsable', 'ACADEMY FOR EDUCATIONAL DEVELOPMENT - AED', NULL, 'djesusccori@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1639, '2018-01-01', '2018-12-31', 'Consultor Asesor, Gestión de Oportunidades de negocios, Gesti{on de Alianzas Institucionales, Gestión de Calidad y los procesos, Gestión de Recursos Humanos', NULL, 'Consultor Asesor Senior', 'GESTIONA Y APRENDE S.A.C', NULL, 'djesusccori@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1640, '2014-03-01', '2019-12-31', 'Levantamiento de Información primaria de la demanda laboral articulada a la oferta formativa de la educación superior tecnológica. Diseño de un instrumento de mediación de empleabilidad y perfilamiento de usuarios. Múltiples Servicios de consultoria. ', NULL, 'Gerente de Proyectos', 'GESTIONA Y APRENDE S.A.C', NULL, 'djesusccori@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1641, '2012-05-01', '2014-02-28', 'Coordinador General y Responsable de Monitoreo y Evaluación. En la Oficina de Lima del proyecto SUMA "Apoyo a la Calidad de la Educación Básica"', NULL, 'Coordinador General y Responsable de Monitoreo y Evaluación', 'FAMILY HEALTH INTERNATIONAL', NULL, 'djesusccori@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1642, '2009-09-16', '2012-04-30', 'Responsable de Planeamiento estratégico y financiero en la Oficina de Lima del Proyecto SUMA. "Apoyo a la Calidad a la Educación Básica"', NULL, 'Responsable de Planeamiento Estratégico', 'ACADEMY FOR EDUCATIONAL DEVELOPMENT - AED', NULL, 'djesusccori@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1643, '2009-09-16', '2010-07-06', 'Asistencia Técnica a regiones en la oficina del proyecto "Apoyo a la Calidad de la Educación Básica"', NULL, 'Coordinador', 'ACADEMY FOR EDUCATIONAL DEVELOPMENT - AED', NULL, 'djesusccori@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1752, '2022-01-04', NULL, '', '', 'Practicante de Reclutamiento y Selección', 'Corporación Mendoza S.A.C', '', 'glopezllosa@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (1877, NULL, NULL, '', '', 'Asistente del Área de Talento Humano', 'Corporación Mendoza', '', 'glopezllosa@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (2002, '2020-02-10', '2021-04-30', '', '', 'Practicante de Recursos Humanos', 'Gestiona y Aprende S.A.C', '', 'glopezllosa@gmail.com', NULL, NULL, NULL, NULL);
INSERT INTO public.tb_experiencialaboral VALUES (2127, '2021-05-01', '2022-03-04', 'Apoyo en el proceso de reclutamiento, selección y contratación del personal para proyectos y planta.
Encargada de realizar publicaciones en las diferentes bolsas de trabajo.
Colaboración en la redacción de los procedimientos y políticas de RRHH de la institución.
Responsable de la gestión y elaboración de contratos del personal.
Responsable del proceso de inducción. 
Responsable de la gestión y control del proceso de capacitación del personal de planta.
Responsable de la gestión y control del proceso de vacaciones del personal de planta.
Responsable de la gestión y elaboración de constancias y certificados de trabajo.
Responsable de la gestión y organización de programas y festividades de la institución.
Asistencia en el desarrollo de medición del clima y satisfacción laboral.
Asistencia en el desarrollo de la evaluación de desempeño institucional.
Asistencia al Comité de Seguridad y Salud en el Trabajo.', '', 'Asistente de Recursos Humanos', 'Corporación Mendoza S.A.C', 'Consultora', 'glopezllosa@gmail.com', NULL, NULL, NULL, NULL);


--
-- Data for Name: tb_formacioncontinua; Type: TABLE DATA; Schema: public; Owner: gestion5
--

INSERT INTO public.tb_formacioncontinua VALUES (24, 'Quechua nivel avanzado', 'PONTIFICIA UNIVERSIDAD CATOLICA DEL PERU', NULL, '1645804833803.pdf', '2018-08-31', 3, 'fatimaohara24@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (21, 'Nuevos Paradigmas en Psicologí Educativa - Organizacional', 'UNIVERSIDAD MARCELINO CHAMPAGNAT', 28, NULL, '2017-12-01', 1, 'aaso18@hotmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (22, 'II Congreso Universitario: "Herederos de sueño, protagonista de un nuevo comienzo"', 'UNIVERSIDAD MARCELINO CHAMPAGNAT', 16, NULL, '2017-10-13', 5, 'aaso18@hotmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (23, 'Coloquio Internacional de Psicología Organizacional', 'T&P GROUP', 48, NULL, '2020-12-05', 5, 'aaso18@hotmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (25, 'Taller de Propuestas de Integración Educativa de TIC en la Educación', 'PONTIFICIA UNIVERSIDAD CATOLICA DEL PERU', 56, NULL, '2022-08-18', 5, 'fatimaohara24@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (26, 'Actualización Las Tecnologías de la Información y Comunicación en la Educación', 'PONTIFICIA UNIVERSIDAD CATOLICA DEL PERU', 56, NULL, '2023-08-19', 1, 'fatimaohara24@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (27, 'Actualización Las Tecnologías de la Información y Comunicación en el Proceso de Enseñanza Aprendizaje', 'PONTIFICIA UNIVERSIDAD CATOLICA DEL PERU', 42, NULL, '2021-06-07', 1, 'fatimaohara24@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (28, 'Diseño y Gestión de Programasde Aprendizaje', 'ESCUELA DE POSTGRADO UPC', 24, NULL, '2022-01-26', 1, 'fatimaohara24@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (29, 'Actualización e Integración de Herramientas Multimedia para el desarrollo de Recursos Didácticos', 'PONTIFICIA UNIVERSIDAD CATOLICA DEL PERU', 42, NULL, '2021-09-16', 1, 'fatimaohara24@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (30, 'Actualización en Integración Curricular de las Tecnologías de la información y comunicación', 'PONTIFICIA UNIVERSIDAD CATOLICA DEL PERU', 42, NULL, '2021-07-07', 1, 'fatimaohara24@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (31, 'Actualización de entornos virtuales de aprendizaje', 'PONTIFICIA UNIVERSIDAD CATOLICA DEL PERU', 42, NULL, '2021-08-16', 1, 'fatimaohara24@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (32, 'Diseño Instruccional - Elearning', 'UNIVERSIDAD PERUANA DE CIENCIAS APLICADAS', 24, NULL, '2021-10-11', 1, 'fatimaohara24@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (33, '¿Cómo estimular la producción del habla en niños menores de 5 años?', 'CENTRO PERUANO DE AUDICION, LENGUAJE Y APRENDIZAJE CPAL', 10, NULL, '2019-01-23', 1, 'fatimaohara24@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (34, 'Taller en tutoria y orientación del educando', 'PONTIFICIA UNIVERSIDAD CATOLICA DEL PERU', 30, NULL, '2019-03-04', 1, 'fatimaohara24@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (35, 'Curso de Ingles : Grammar Review', 'INTELEX PERU', NULL, NULL, '2001-07-27', 3, 'mirandajackeline1306@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (36, 'Experto en ofimática (Windows XP y Microsoft Office 2003 (Word, Excel y Power Point)', 'UNIVERSIDAD NACIONAL FEDERICO VILLAREAL', 80, NULL, '2008-05-06', 1, 'mirandajackeline1306@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (37, 'Monitoreo y Evaluación de Programas y Proyectos Sociales', 'REDINFOR PERU', 120, NULL, '2021-07-26', 1, 'mirandajackeline1306@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (38, 'Contrtaciiones del  Estado', 'IPAPPG', 50, NULL, '2021-08-19', 1, 'mirandajackeline1306@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (39, 'Seminario: " Finalidad y finciones del Banco Central de Reserva del Perú"', 'Banco Central de la Reserva', NULL, NULL, '2000-10-20', 5, 'mirandajackeline1306@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (40, 'Seminario: "Las minas y las comunidades"', 'INSTITUTO DE CAPACITACION MINERA DIRECCION NACIONAL', 15, NULL, '2007-09-28', 5, 'mirandajackeline1306@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (41, 'Asesoría en Plan de Negocios', 'PROGRAMA PERU EMPRENDEDOR / STRATEGIA CONSULTORES ', NULL, NULL, '2005-08-29', 5, 'mirandajackeline1306@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (42, 'Seminario:"Desarrollo sostenible responsabilidad medioambeintal en la ciudad de trujillo', 'MUNICIPALIDAD PROVINCIAL DE TRUJILLO', NULL, NULL, '2005-06-04', 5, 'mirandajackeline1306@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (43, 'Seminario de difusión de las medidas de prevención de riesgos asociados a las instalaciones eléctricas y al cuidado del medio ambiente', 'Osinerg ', NULL, NULL, '2005-08-22', 5, 'mirandajackeline1306@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (44, 'I Seminario de Estrategias de gestión empresarial', 'SENATI', 10, NULL, '2005-11-04', 5, 'mirandajackeline1306@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (45, 'Prospectiva Tecnológica: Un instrumento para visualizar el futuro de su empresa', 'SENATI', NULL, NULL, '2003-09-12', 5, 'mirandajackeline1306@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (46, 'Conozca de empresa', 'SENATI', 100, NULL, '2004-12-29', 1, 'mirandajackeline1306@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (47, 'Gestión de las relaciones interpersonales y la calidad', 'SOCIEDAD ACADEMICA NIKKEI', NULL, NULL, '2007-06-08', 5, 'mirandajackeline1306@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (48, 'Formato internacional del FLADEM "Pedagogías abiertas en la educación Musical"', 'FORO LATINOAMERICANO DE EDUCACION MUSICAL - FLADEM', 45, NULL, '2018-08-03', 1, 'sanchez.isabel0609@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (49, 'Capacitación Danzas Folkloricas de hoy y siempre', 'ESCUELA NACIONAL SUPERIOR DE FOLKLORE', 200, NULL, '2019-02-01', 1, 'sanchez.isabel0609@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (50, 'Taller de capacitación docente en folklore', 'UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS Y MINISTERIO DE EDUCACIÓN', 200, NULL, '2019-02-03', 1, 'sanchez.isabel0609@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (51, 'Derechos de los pueblos indigenas y politicas interculturales', 'ANTONIO RUIZ DE MONTAYA', 42, NULL, '2020-09-17', 1, 'sanchez.isabel0609@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (52, 'Nivel Intermedio ', 'IDIOMAS CATOLICA', NULL, NULL, '2021-09-30', 3, 'sanchez.isabel0609@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (53, 'Programa de formación 2021 de la estrategia Defensores del Patrimonio Cultural', 'MINISTERIO DE CULTURA', 100, NULL, '2021-09-30', 5, 'sanchez.isabel0609@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (54, 'CIOFF Juvenil Comité Lima', 'MINISTERIO DE CULTURA', NULL, NULL, '2021-12-31', 5, 'sanchez.isabel0609@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (55, 'Mentoría: Planificación de desarrollo de públicos', 'MINISTERIO DE CULTURA', NULL, NULL, '2020-11-12', 5, 'sanchez.isabel0609@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (56, 'Aprendiendo Juntos', 'DERECHO & SOCIEDAD', NULL, NULL, NULL, 1, 'cesar.aldea@pucp.edu.pe');
INSERT INTO public.tb_formacioncontinua VALUES (57, 'Elaboración de Linea de base social para los estudios de impacto ambiental', 'PONTIFICIA UNIVERSIDAD CATOLICA DEL PERU', NULL, NULL, '2018-10-29', 5, 'cesar.aldea@pucp.edu.pe');
INSERT INTO public.tb_formacioncontinua VALUES (58, 'Buenas prácticas en Gestión de Proyectos', 'PROYECTOS PUCP', NULL, NULL, '2016-08-17', 5, 'cesar.aldea@pucp.edu.pe');
INSERT INTO public.tb_formacioncontinua VALUES (59, 'Hacia una república sin corrupción ni violencia, camino al bicentenario', 'X CONGRESO NACIONAL DE SOCIOLOGIA', NULL, NULL, '1905-07-10', 5, 'cesar.aldea@pucp.edu.pe');
INSERT INTO public.tb_formacioncontinua VALUES (60, 'América Latina y un mundo multipolar ¿hacia donde ir?', 'UNIVERSIDAD NACIONAL DEL CENTRO DEL PERU - HUANCAYO', NULL, NULL, '1905-07-10', 5, 'cesar.aldea@pucp.edu.pe');
INSERT INTO public.tb_formacioncontinua VALUES (61, 'Seminario Taller de proyectos de inversión orientados al desarrollo local sostenible', 'E.A.P DE SOCIOLOGIA FACULTAD DE CIENCIAS SOCIALES', 60, NULL, NULL, 5, 'Lisbeth.jgsoc@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (62, 'Plan estrategico del movimiento de los Sin techo Metropolitano y del Perú Sur, de la provincia de Lima', 'UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS', 60, NULL, '2016-12-14', 5, 'Lisbeth.jgsoc@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (63, 'Dejala decidir sobre derechos sexuales y derechos reproductivos', 'CENTRO DE LA MUJER PERUANA FLORA TRISTAN', 3, NULL, '2014-09-24', 5, 'Lisbeth.jgsoc@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (64, 'Transversalización de enfoque de género en proyectos sociales', 'REDINFOR PERU', NULL, NULL, '2022-02-21', 5, 'Lisbeth.jgsoc@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (65, 'Reporte de investigación acción sobre la experiencia de economía social y solidaria del movimeinto de los Sin techo Metropolitano y del perú, de la ciudad de Lima', 'UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS', NULL, NULL, '2016-08-02', 5, 'Lisbeth.jgsoc@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (68, 'Fronted Developer', 'PLATZI', 15, NULL, '2021-11-30', 1, 'jorgecollaz@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (69, 'Excel intensivo', 'CENTRO ESPECIALIZADO DE HERRAMIENTAS INFORMÁTICAS', 30, NULL, '2019-02-28', 1, 'jorgecollaz@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (70, 'Ingles nivel A2', 'CAMBRIDGE ENGLISH', NULL, NULL, '2018-01-29', 1, 'jorgecollaz@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (71, 'Fundamentos de Google search console para SEO', 'PLATZI', 12, NULL, '2022-01-14', 1, 'jorgecollaz@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (72, 'Programa de diploma de bachillerato internacional ', 'COLEGIO DE ALTO RENDIMIENTO ', NULL, NULL, '2018-12-17', 1, 'jorgecollaz@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (73, 'Excel básico', 'UNIVERSIDAD NACIONAL DE INGENERÍA', 24, NULL, '2021-04-09', 1, 'veronica.07.cc@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (74, 'Empleabilidad y Mercado Laboral', 'CAMPUS VIRTUAL ROMERO', 19, NULL, '2021-03-08', 1, 'veronica.07.cc@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (75, 'Prevención de adiciones: consejo breve', 'UNIVERSIDAD NACIONAL AUTÓNOMA DE MEXICO', 30, NULL, '2021-02-28', 1, 'veronica.07.cc@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (76, 'Marketing de contenidos para redes sociales', 'DOMESTIKA', NULL, NULL, '2020-11-11', 1, '7.nataliarioslo@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (77, 'Marketing con influencers: Gestiona campañas efectivas', 'CREHANA', 4, NULL, '2021-04-30', 1, '7.nataliarioslo@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (78, 'Ingles nivel avanzado', 'PONTIFICIA UNIVERSIDAD CATOLICA DEL PERU', NULL, NULL, '2020-04-30', 1, '7.nataliarioslo@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (79, 'Postproducción audiovisual para redes sociales', 'CREHANA', 5, NULL, '2021-08-31', 1, '7.nataliarioslo@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (80, 'Manejo de hojas de cálculo- nivel intermedio', 'PONTIFICIA UNIVERSIDAD CATOLICA DEL PERU', 24, NULL, '2018-10-15', 1, '7.nataliarioslo@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (81, 'Gestión Pública para el desarrollo', 'BID', 130, NULL, '2021-05-31', 1, 'tefa1997.fsra@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (82, 'IDB6x: Gestión de Proyectos de Desarrollo', 'BID', 40, NULL, '2021-05-08', 1, 'tefa1997.fsra@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (83, 'Especialización gestión pública', 'UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS', 240, NULL, '2020-03-09', 2, 'tefa1997.fsra@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (84, 'IDB10x: Datos para la efectividad de las políticas públicas', 'BID', 40, NULL, '2021-05-08', 1, 'tefa1997.fsra@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (85, 'IDB1x: Gestión por resultados para gobiernos subnacionales', 'BID', 40, NULL, '2021-05-13', 1, 'tefa1997.fsra@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (86, 'Conferencia Internacional: ¿Sabemos hoy qué es el desarrollo? Pinceladas sobre el enfoque del desarrollo territorial ', 'PONTIFICIA UNIVERSIDAD CATOLICA DEL PERU', NULL, NULL, '2020-02-25', 5, 'tefa1997.fsra@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (87, 'Seminario: Régimen tributario aduanero y tributación aduanera', 'UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS', 6, NULL, '2017-03-25', 5, 'tefa1997.fsra@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (88, 'Contrataciones con el estado: "Armado de propuestas efectivas para bienes y servicios"', 'CÁMARA DE COMERCIO LIMA', 12, NULL, '2019-10-04', 5, 'tefa1997.fsra@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (89, 'Gestión de compras y proveedores', 'UNIVERSIDAD CATÓLICA SEDES SAPIENTIAE', 21, NULL, '2018-09-23', 1, 'tefa1997.fsra@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (90, 'Workshop. Theory and Tools of the Harvard Negotiation Project', 'HARVARD UNIVERSITY ', NULL, NULL, '2015-06-19', 1, 'djesusccori@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (91, 'Programa de Gobernabilidad y Gerencia Política', 'BANCO DE DESARROLLO DE AMÉRICA LATINA ', 276, NULL, '2012-12-01', 5, 'djesusccori@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (92, ' Gestión Municipal', 'UNIVERSIDAD ESAN', 144, NULL, '2005-11-11', 2, 'djesusccori@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (93, 'Invierte Perú', 'UNIVERSIDAD CATOLICA SEDES DAPIENTIAE', 12, NULL, '2017-07-11', 1, 'djesusccori@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (94, 'Metodología para elaborar Perfiles de Puestos en las Entidades Públicas', 'AUTORIDAD NACIONAL DEL SERVICIO CIVIL', 8, NULL, '2015-02-17', 1, 'djesusccori@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (95, 'Mapeo de Puestos en las Entidades Públicas', 'AUTORIDAD NACIONAL DEL SERVICIO CIVIL', 8, NULL, '2015-02-18', 1, 'djesusccori@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (96, 'Mejora Continua y rediseño de procesos en el sector público', 'PONTIFICIA UNIVERSIDAD CATOLICA DEL PERÚ', 20, NULL, '2012-03-28', 1, 'djesusccori@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (97, '"Reformas Sociales, evaluación y participación ciudadana en América Latina: debates y posibilidades', 'UNIVERSIDAD DE COSTA RICA', 33, NULL, '2010-07-30', 1, 'djesusccori@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (98, 'Evaluando Impactos: De Promesas a Evidencias', 'BANCO INTERNACIONAL DE RECONSTRUCCIÓN Y FOMENTO', NULL, NULL, '2009-01-30', 1, 'djesusccori@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (99, 'Marco Lógico para el Diseño de Proyectos - ZIAD', 'INTER - AMERICAN DEVELOPMENT BANK', NULL, NULL, '2006-12-03', 1, 'djesusccori@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (100, 'Gerencia Municipal: Nuevos Enfoques y Desafíos', 'UNIVERSIDAD ESAN', 24, NULL, '2005-11-11', 1, 'djesusccori@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (101, 'Gerencia social y Descentralización de las Políticas y los Programas Sociales', 'UNIVERSIDAD ESAN', 24, NULL, '2005-08-05', 1, 'djesusccori@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (102, 'Planificación Estratégica Participativa: Factor de Éxito para el Desarrollo Local', 'UNIVERSIDAD ESAN', 24, NULL, '2005-05-15', 1, 'djesusccori@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (103, 'Desarrollo Local: Concepciones, Escenarios y Desafíos', 'UNIVERSIDAD ESAN', 24, NULL, '2005-01-14', 1, 'djesusccori@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (104, 'Formulación, Gestión y Evaluación de Programas y Proyectos', 'UNIVERSIDAD ESAN', 24, NULL, '2005-11-05', 1, 'djesusccori@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (105, 'Gestión Ambiental para el Desarrollo Sostenible', 'UNIVERSIDAD ESAN', 24, NULL, '2004-08-06', 1, 'djesusccori@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (106, 'Presupuesto Participativo: Metodología y Gestión de Riesgos', 'UNIVERSIDAD ESAN', 24, NULL, '2004-08-06', 1, 'djesusccori@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (107, 'I Conferencia ReLaC: Evaluación, democracia y gobernabilidad: desafíos para América Latina', 'RELAC - RED DE SEGUIMIENTO, EVALUACIÓN Y SISTEMATIZACIÓN EN AMÉRICA LATINA Y EL CARIBE', NULL, NULL, '2004-10-01', 1, 'djesusccori@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (108, 'Comercio Internacional', 'CENTROS ACADÉMICOS DE ADEX', NULL, NULL, '2003-02-20', 1, 'djesusccori@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (109, 'Técnicas para evaluar planes de inversión', 'UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS', 21, NULL, '2001-10-01', 1, 'djesusccori@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (110, 'Microsoft Project 2000', 'UNIVERSIDAD NACIONAL FEDERICO VILLAREAL', 30, NULL, '2001-10-18', 1, 'djesusccori@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (111, 'Administración de Marketing y Ventas', 'INSTITUTO DE GESTIÓN Y DESARROLLO ', 60, NULL, '1999-07-25', 6, 'djesusccori@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (112, 'Gestión de la Inversión Pública bajo el Sistema del INVIERTE.PE', 'UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS', 220, NULL, '2019-05-10', 2, 'djesusccori@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (113, 'Gestión Pública Moderna', 'INSTITUTO PERUANO DE ASUNTOS POLÍTICOS, POLÍTICA Y GOBIERNO (IPPAG) ', 40, NULL, '2019-05-10', 2, 'djesusccori@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (114, 'Evaluación de Impacto de Programas Sociales', 'MASSACHUSETTS INSTITUTE OF TECHNOLOGY', NULL, NULL, '2017-09-22', 1, 'djesusccori@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (115, 'Desafíos y oportunidades en la economía digital', 'BANCO INTERAMERICANO DE DESARROLLO', NULL, NULL, '2019-04-21', 1, 'djesusccori@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (116, 'Gestión de proyectos con metodologías Ágiles y enfoques Lean (10a edición)', 'MIRÍADAX', 40, NULL, '2020-07-31', 1, 'djesusccori@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (117, 'Ponencia: La Escuela de Educación Disruptiva', 'SCOLARTIC', NULL, NULL, '2017-12-08', 5, 'djesusccori@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (118, 'Habilidades para el empleo', 'CONECTA EMPLEO', 30, NULL, '2020-09-04', 1, 'djesusccori@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (119, 'Aprendizaje Basado en Proyectos (ABP). Conv17_2', 'SCOLARTIC', 40, NULL, '2017-08-30', 1, 'djesusccori@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (120, 'Potencia tu negocio a través de Facebook Messenger', 'FUNDACIÓN ROMERO', 2, NULL, NULL, 1, 'djesusccori@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (121, 'Diplomado de especialización en Gestión Ágil de Proyectos con PMBOK, SCRUM y DESIGN THINKING', 'GESTIONA Y APRENDE SAC', 40, NULL, '2021-12-17', 6, 'djesusccori@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (122, 'Armado de Propuestas efectivas para bienes y servicios', 'CÁMARA DE COMERCIO LIMA', 12, NULL, '2019-10-04', 5, 'djesusccori@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (123, 'Diplomado de especialización en Gestión ágil de proyectos con PMBOK, SCRUM y DESIGN THINKING', 'GESTIONA Y APRENDE SAC', 40, NULL, '2021-12-17', 6, 'glopezllosa@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (124, 'Programa de especialista en Excel', 'ZEGEL VIRTUAL', 52, NULL, '2021-07-27', 2, 'glopezllosa@gmail.com');
INSERT INTO public.tb_formacioncontinua VALUES (125, 'Portugués', 'EUROIDIOMAS', 120, NULL, '2021-05-30', 1, 'glopezllosa@gmail.com');


--
-- Data for Name: tb_formacioninicial; Type: TABLE DATA; Schema: public; Owner: gestion5
--

INSERT INTO public.tb_formacioninicial VALUES (3001, 'UNIVERSIDAD MARCELINO CHAMPAGNAT', 'Psicología', '2020-08-13', NULL, NULL, 0, 1, 1, 2, 0, 0, 'aaso18@hotmail.com', NULL, NULL);
INSERT INTO public.tb_formacioninicial VALUES (3004, 'UNIVERSIDAD NACIONAL FEDERICO VILLAREAL', 'Economía', '2009-02-27', NULL, NULL, 1, 0, 1, 4, 0, 0, 'mirandajackeline1306@gmail.com', NULL, NULL);
INSERT INTO public.tb_formacioninicial VALUES (3005, 'EL SERVICIO NACIONAL DE ADIESTRAMIENTO EN TRABAJO INDUSTRIAL', 'ADMINISTRACION INDUSTRIAL', '2008-08-13', NULL, NULL, NULL, 1, 1, 2, 0, 0, 'mirandajackeline1306@gmail.com', NULL, NULL);
INSERT INTO public.tb_formacioninicial VALUES (3006, 'PONTIFICIA UNIVERSIDAD CATOLICA', 'Educación', '2021-06-16', NULL, NULL, NULL, 1, 1, 3, 0, 0, 'sanchez.isabel0609@gmail.com', NULL, NULL);
INSERT INTO public.tb_formacioninicial VALUES (3007, 'PONTIFICIA UNIVERSIDAD CATOLICA', 'Educación Inicial', '2021-12-15', NULL, NULL, NULL, 1, 1, 4, 0, 0, 'sanchez.isabel0609@gmail.com', NULL, NULL);
INSERT INTO public.tb_formacioninicial VALUES (3008, 'UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS', 'Ciencias Sociales', '2019-04-03', NULL, NULL, NULL, 1, 1, 3, 0, 0, 'Lisbeth.jgsoc@gmail.com', NULL, NULL);
INSERT INTO public.tb_formacioninicial VALUES (3003, 'PONTIFICIA UNIVERSIDAD CATOLICA', 'Educación con Especialidad en Educación imicial', '2021-08-04', '1645804416262FFOPL2.pdf.pdf', NULL, 1, 1, 1, 4, 0, 0, 'fatimaohara24@gmail.com', NULL, NULL);
INSERT INTO public.tb_formacioninicial VALUES (3002, 'PONTIFICIA UNIVERSIDAD CATOLICA', 'Educación', '2021-01-26', '1645804441080FFOPL1.pdf.pdf', NULL, 1, 1, 1, 3, 0, 0, 'fatimaohara24@gmail.com', NULL, NULL);
INSERT INTO public.tb_formacioninicial VALUES (3126, 'UNIVERSIDAD RICARDO PALMA', 'Psicología', '2021-12-17', NULL, NULL, 0, 1, 1, 2, 0, 0, 'veronica.07.cc@gmail.com', NULL, NULL);
INSERT INTO public.tb_formacioninicial VALUES (3127, 'PONTIFICIA UNIVERSIDAD CATOLICA DEL PERU', 'Comunicación Audiovisual', '2021-11-28', NULL, NULL, 0, 0, 1, 3, 0, 0, '7.nataliarioslo@gmail.com', NULL, NULL);
INSERT INTO public.tb_formacioninicial VALUES (3128, 'UNIVERSIDAD CATÓLICA SEDES SAPIENTIAE', 'Administración', '2019-04-05', NULL, NULL, 0, 1, 1, 3, 0, 0, 'tefa1997.fsra@gmail.com', NULL, NULL);
INSERT INTO public.tb_formacioninicial VALUES (3130, 'PONTIFICIA UNIVERSIDAD CATOLICA', 'Maestría en Gerencia Social', '2007-12-01', NULL, NULL, 0, 0, 2, 0, 1, 2, 'djesusccori@gmail.com', NULL, NULL);
INSERT INTO public.tb_formacioninicial VALUES (3131, 'UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS', 'Doctorado Gestión Económica Global', '2017-09-04', NULL, NULL, 0, 0, 2, 0, 2, 2, 'djesusccori@gmail.com', NULL, NULL);
INSERT INTO public.tb_formacioninicial VALUES (3132, 'UNIVERSIDAD PRIVADA TELESUP', 'Maestría en Gestión Pública', '2017-10-01', NULL, NULL, 0, 0, 2, 0, 1, 2, 'djesusccori@gmail.com', NULL, NULL);
INSERT INTO public.tb_formacioninicial VALUES (3133, 'UNIVERSIDAD EAFIT', 'Maestría en Gerencia de Empresas Sociales', '2019-10-02', NULL, NULL, 0, 0, 2, 0, 1, 2, 'djesusccori@gmail.com', NULL, NULL);
INSERT INTO public.tb_formacioninicial VALUES (3134, 'UNIVERSIDAD CATOLICA SEDES DAPIENTIAE', 'Maestría en Administración Pública', '2020-05-26', NULL, NULL, 0, 0, 2, 0, 1, 2, 'djesusccori@gmail.com', NULL, NULL);
INSERT INTO public.tb_formacioninicial VALUES (3135, 'UNIVERSIDAD PRIVADA DEL NORTE', 'Psicología', '2021-09-10', NULL, NULL, 0, 0, 1, 3, 0, 0, 'glopezllosa@gmail.com', NULL, NULL);
INSERT INTO public.tb_formacioninicial VALUES (3129, 'UNIVERSIDAD NACIONAL FEDERICO VILLAREAL', 'Ciencias Económicas', '2002-07-18', '1646414720853Analisis del taller FODA.pptx.pptx', '1646414751062Análisis FODA v1.xlsx.xlsx', 1, 0, 1, 3, 0, 0, 'djesusccori@gmail.com', NULL, NULL);
INSERT INTO public.tb_formacioninicial VALUES (3251, 'Universidad de Ingeniería y Tecnología', 'Ciencia de la computación', NULL, NULL, NULL, 1, NULL, 1, 1, NULL, NULL, 'jorgecollaz@gmail.com', 2019, 2022);


--
-- Data for Name: tb_habilidades_consultor; Type: TABLE DATA; Schema: public; Owner: gestion5
--

INSERT INTO public.tb_habilidades_consultor VALUES (40, 'aaso18@hotmail.com', 5, 5, 5, 5, 5);
INSERT INTO public.tb_habilidades_consultor VALUES (41, 'fatimaohara24@gmail.com', 5, 5, 5, 5, 5);
INSERT INTO public.tb_habilidades_consultor VALUES (42, 'mirandajackeline1306@gmail.com', 5, 5, 5, 5, 5);
INSERT INTO public.tb_habilidades_consultor VALUES (43, 'sanchez.isabel0609@gmail.com', 5, 5, 5, 5, 5);
INSERT INTO public.tb_habilidades_consultor VALUES (44, 'cesar.aldea@pucp.edu.pe', 5, 5, 5, 5, 5);
INSERT INTO public.tb_habilidades_consultor VALUES (45, 'Lisbeth.jgsoc@gmail.com', 5, 5, 5, 5, 5);
INSERT INTO public.tb_habilidades_consultor VALUES (46, 'lorenaricse.lr@gmail.com', 5, 5, 5, 5, 5);
INSERT INTO public.tb_habilidades_consultor VALUES (47, 'jriospeceros@gmail.com', 5, 5, 5, 5, 5);
INSERT INTO public.tb_habilidades_consultor VALUES (48, 'martin.rengifod@pucp.edu.pe', 5, 5, 5, 5, 5);
INSERT INTO public.tb_habilidades_consultor VALUES (49, 'patyretto@gmail.com', 5, 5, 5, 5, 5);
INSERT INTO public.tb_habilidades_consultor VALUES (51, 'freen2331@gmail.com', 5, 5, 5, 5, 5);
INSERT INTO public.tb_habilidades_consultor VALUES (54, '7.nataliarioslo@gmail.com', 5, 5, 5, 5, 5);
INSERT INTO public.tb_habilidades_consultor VALUES (55, 'tefa1997.fsra@gmail.com', 5, 5, 5, 5, 5);
INSERT INTO public.tb_habilidades_consultor VALUES (56, 'djesusccori@gmail.com', 5, 5, 5, 5, 5);
INSERT INTO public.tb_habilidades_consultor VALUES (57, 'glopezllosa@gmail.com', 90, 100, 90, 100, 90);
INSERT INTO public.tb_habilidades_consultor VALUES (53, 'veronica.07.cc@gmail.com', 90, 80, 81, 97, 60);
INSERT INTO public.tb_habilidades_consultor VALUES (52, 'jorgecollaz@gmail.com', 84, 85, 100, 55, 82);


--
-- Data for Name: tb_institucioneducativa; Type: TABLE DATA; Schema: public; Owner: gestion5
--



--
-- Data for Name: tb_tipodedocumento; Type: TABLE DATA; Schema: public; Owner: gestion5
--

INSERT INTO public.tb_tipodedocumento VALUES (1, 'DNI');
INSERT INTO public.tb_tipodedocumento VALUES (2, 'RUC');
INSERT INTO public.tb_tipodedocumento VALUES (3, 'Pasporte');
INSERT INTO public.tb_tipodedocumento VALUES (4, 'Carnet de extranjeria');


--
-- Data for Name: tb_universidad; Type: TABLE DATA; Schema: public; Owner: gestion5
--



--
-- Data for Name: tip_doc; Type: TABLE DATA; Schema: public; Owner: gestion5
--



--
-- Data for Name: tipodeformacioninicial; Type: TABLE DATA; Schema: public; Owner: gestion5
--

INSERT INTO public.tipodeformacioninicial VALUES (2, 'Postgrado');
INSERT INTO public.tipodeformacioninicial VALUES (1, 'Pregrado');


--
-- Data for Name: tipousu; Type: TABLE DATA; Schema: public; Owner: gestion5
--

INSERT INTO public.tipousu VALUES (1, 'Consultor');
INSERT INTO public.tipousu VALUES (2, 'Reclutador');
INSERT INTO public.tipousu VALUES (3, 'Recursos Humanos');
INSERT INTO public.tipousu VALUES (4, 'Admin');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: gestion5
--

INSERT INTO public.users VALUES (123, 1, 'Daniel Jesús Ccori', 'djesusccori@gmail.com', NULL, '$2a$10$jpMP8915U1TlPWUJLoXwLuQUKR3LpfRVljBBCMMATJ4n9886xgPBa', 1, '2022-03-03', '2022-03-04', '', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkamVzdXNjY29yaUBnbWFpbC5jb20iLCJyb2xlIjoxLCJpYXQiOjE2NDY0MTQwMTd9.jAMC4vcX7uZuppwbn5PBHY67pcrJ3TFYKhAk7Cr6jP4', NULL);
INSERT INTO public.users VALUES (122, 1, 'Natalia Lucero Rios López', '7.nataliarioslo@gmail.com', NULL, '$2a$10$AkzbJggA1cq06IvK12HqDe0r/FpAmHUX.y7fCkXbld1kEakyPDuKu', 1, '2022-03-03', '2022-03-04', NULL, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3Lm5hdGFsaWFyaW9zbG9AZ21haWwuY29tIiwicm9sZSI6MSwiaWF0IjoxNjQ2NDEyMjAwfQ.nMWCkm12D3pGPGlmrddN0PQOGqHvomqJpSZn5TExGmA', NULL);
INSERT INTO public.users VALUES (117, 1, 'Fátima  O´Hara Pareja - Lecaros', 'fatimaohara24@gmail.com', NULL, '$2a$10$f6pn5b/DyTxGT32XaI8iXu6j4F26UA9k5lEGT24F6rMNWjxCag7rC', 1, '2022-02-24', '2022-03-18', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmYXRpbWFvaGFyYTI0QGdtYWlsLmNvbSIsInJvbGUiOjEsImlhdCI6MTY0NzAxNjcwNSwiZXhwIjoxNjQ3MDE3NjA1fQ.EaLOLkOhO1l6QBd8yNtKP3cgJhOlYG_hNICMnk4_Y8Y', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmYXRpbWFvaGFyYTI0QGdtYWlsLmNvbSIsInJvbGUiOjEsImlhdCI6MTY0NzYxMjQ2MX0.RziB1DeudaPWk34y7sajokt59CvcwGo2H3RG1opvq4M', NULL);
INSERT INTO public.users VALUES (124, 1, 'Gracce Alejandra López Llosa', 'glopezllosa@gmail.com', NULL, '$2a$10$HqCvEGT.y4SncCYJrHompulfFlivYTLIsd4sGu7uDzUn/KUoSlypC', 1, '2022-03-03', '2022-03-04', NULL, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJnbG9wZXpsbG9zYUBnbWFpbC5jb20iLCJyb2xlIjoxLCJpYXQiOjE2NDY0MTQ1MTJ9.fNhfNK3kYHHYVLAfUmmtmuvLGSJ4aVcIxhx9HfVlwOM', NULL);
INSERT INTO public.users VALUES (119, 1, 'Frenn user', 'freen2331@gmail.com', NULL, '$2a$10$u1f7sHRE8AR8M3ybaX322OF1uXrCwS.yJhvVcr41AuZnvQ.3xH7Fq', 1, '2022-03-03', '2022-03-03', '', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmcmVlbjIzMzFAZ21haWwuY29tIiwicm9sZSI6MSwiaWF0IjoxNjQ2MzI5Nzk1fQ.EzjSkizhBrtUgiGXOUKZGPTpAcE4OVqDRSArYm-v68E', NULL);
INSERT INTO public.users VALUES (104, 1, 'Luis Fernandez', 'luisferna@gmail.com', NULL, '$2a$10$wUUjquI/8.3x1qB2Xd0Nh.kIqMdoYXdprJw3VOmjZ6LcLnMbcRqLC', 1, '2022-02-11', '2022-02-11', NULL, NULL, NULL);
INSERT INTO public.users VALUES (125, 1, 'Verónica Yazmin Melani Criollo Cartulin', 'veronica.07.cc@gmail.com', NULL, '$2a$10$OmDIUJ4ufqOUWVYJf03kUe3zkzaM3u76DF3XSpgSwDdl0ivqGglOy', 1, '2022-03-03', '2022-03-11', '', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ2ZXJvbmljYS4wNy5jY0BnbWFpbC5jb20iLCJyb2xlIjoxLCJpYXQiOjE2NDcwMTgyMTV9._mZR3X5tS-1eN4OZg_urXP1UmtwcORtHD6hThxBKcKU', NULL);
INSERT INTO public.users VALUES (108, 1, 'Jackeline Margot Miranda Falcon', 'mirandajackeline1306@gmail.com', NULL, '$2a$10$i3ZlU6bSxgeRQOx8rbuFzuJ2l1.xwg1A75d2H0fb4fmA4JRs9qFoG', 1, '2022-02-24', '2022-02-24', NULL, NULL, NULL);
INSERT INTO public.users VALUES (109, 1, 'María Isabel Sanchez Ayvar', 'sanchez.isabel0609@gmail.com', NULL, '$2a$10$9V.4M7052ZHNkIcazVA39upr6/u0GUWofT0UjQAF/v/.DNQIJ.bWS', 1, '2022-02-24', '2022-02-24', NULL, NULL, NULL);
INSERT INTO public.users VALUES (110, 1, 'Juan César Aldea Mendoza', 'cesar.aldea@pucp.edu.pe', NULL, '$2a$10$sTrR2rbPVxs3eQaTVLtGUOAge0DctFYI0TRAu21JzbCZgirMdv/Qy', 1, '2022-02-24', '2022-02-24', NULL, NULL, NULL);
INSERT INTO public.users VALUES (111, 1, 'Kelly Lisbeth Jara Gomez', 'Lisbeth.jgsoc@gmail.com', NULL, '$2a$10$dd8HL/hsxWuuPP6K5lKu/O4kFrF9sOuKuXqBXwnETYnGuSGA5Xlim', 1, '2022-02-24', '2022-02-24', NULL, NULL, NULL);
INSERT INTO public.users VALUES (112, 1, 'Lorena Ricse Gallango', 'lorenaricse.lr@gmail.com', NULL, '$2a$10$AeKPr3Oo1i1I1C0XJPQa2uQL3Rg/ZYxTZnz99cZMuMcAo/l2uEbzK', 1, '2022-02-24', '2022-02-24', NULL, NULL, NULL);
INSERT INTO public.users VALUES (113, 1, 'Jesús Ignacio Rios  Peceros', 'jriospeceros@gmail.com', NULL, '$2a$10$yzaQlQvDDgXsOmh1/GZLqO.jpdfxD68pmijShB0r6aKxsJlBNcWm2', 1, '2022-02-24', '2022-02-24', NULL, NULL, NULL);
INSERT INTO public.users VALUES (114, 1, 'Martin Rengifo Dávalos', 'martin.rengifod@pucp.edu.pe', NULL, '$2a$10$xn19vKTTtR8UalHIjJps0.xgvRq0Qotdibd.yNT/bV10sj1suz1LC', 1, '2022-02-24', '2022-02-24', NULL, NULL, NULL);
INSERT INTO public.users VALUES (115, 1, 'Patricia Isabel Retto Hernandez', 'patyretto@gmail.com', NULL, '$2a$10$CL8ifpW2HYVoLfro4W4qqutKnWM4jL2ZaCCSw7dRDeepl/F6IuRtC', 1, '2022-02-24', '2022-02-24', NULL, NULL, NULL);
INSERT INTO public.users VALUES (116, 1, 'Alberto  Silva Orellana', 'aaso18@hotmail.com', NULL, '$2a$10$kSV6f0t6y7S8ewx86SP2UuE.PhFrF/4IuNu/rDzC848oZw9ebdA3C', 1, '2022-02-24', '2022-02-25', NULL, NULL, NULL);
INSERT INTO public.users VALUES (126, 1, 'Fiorella Sthefany Rojas Angulo', 'tefa1997.fsra@gmail.com', NULL, '$2a$10$FyB3wVEQ7gSA6cDJr4YEteUVw7YXNzM6VOcjNgFAUFl2lyQYW.rke', 1, '2022-03-03', '2022-03-04', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZWZhMTk5Ny5mc3JhQGdtYWlsLmNvbSIsInJvbGUiOjEsImlhdCI6MTY0NzYyNDgyNSwiZXhwIjoxNjQ3NjI1NzI1fQ.R7V8GkZIzCijjpdpFsmyt2EpZdzZaXAM15zbGUDAfuY', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZWZhMTk5Ny5mc3JhQGdtYWlsLmNvbSIsInJvbGUiOjEsImlhdCI6MTY0NjQxMzg0OX0.cG4ZSjAEgP-h5JpDI4-yAkYYYI5yHKzkNJRfI9YCHfQ', NULL);
INSERT INTO public.users VALUES (121, 1, 'Jorge Luis  Collazos Martínez', 'jorgecollaz@gmail.com', NULL, '$2a$10$EUkm.ooh3l8ftWIHAvQd0.saPGzpssjG09KpTEd5WbfG8FFJmyecG', 1, '2022-03-03', '2022-03-25', '', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqb3JnZWNvbGxhekBnbWFpbC5jb20iLCJyb2xlIjoxLCJpYXQiOjE2NDgyMjc5Mzh9.r979rvdQ4IPBNEt5eJLM7gLmfmWLa8rX6x3hQmvEk20', NULL);


--
-- Name: sectorempresarial_idsectorempresarial_seq; Type: SEQUENCE SET; Schema: public; Owner: gestion5
--

SELECT pg_catalog.setval('public.sectorempresarial_idsectorempresarial_seq', 1, false);


--
-- Name: tb_acercadeti_consultor_idpostulante_seq; Type: SEQUENCE SET; Schema: public; Owner: gestion5
--

SELECT pg_catalog.setval('public.tb_acercadeti_consultor_idpostulante_seq', 4254, true);


--
-- Name: tb_carrerauniversitaria_idcarrea_seq; Type: SEQUENCE SET; Schema: public; Owner: gestion5
--

SELECT pg_catalog.setval('public.tb_carrerauniversitaria_idcarrea_seq', 1, false);


--
-- Name: tb_experiencialaboral_idexperiencialaboral_seq; Type: SEQUENCE SET; Schema: public; Owner: gestion5
--

SELECT pg_catalog.setval('public.tb_experiencialaboral_idexperiencialaboral_seq', 2251, true);


--
-- Name: tb_formacioncontinua_idformacioncontinua_seq; Type: SEQUENCE SET; Schema: public; Owner: gestion5
--

SELECT pg_catalog.setval('public.tb_formacioncontinua_idformacioncontinua_seq', 126, true);


--
-- Name: tb_formacioninicial_idformacioninicial_seq; Type: SEQUENCE SET; Schema: public; Owner: gestion5
--

SELECT pg_catalog.setval('public.tb_formacioninicial_idformacioninicial_seq', 3375, true);


--
-- Name: tb_habilidades_consultor_idconsultor_seq; Type: SEQUENCE SET; Schema: public; Owner: gestion5
--

SELECT pg_catalog.setval('public.tb_habilidades_consultor_idconsultor_seq', 57, true);


--
-- Name: tb_institucioneducativa_idinstitucion_seq; Type: SEQUENCE SET; Schema: public; Owner: gestion5
--

SELECT pg_catalog.setval('public.tb_institucioneducativa_idinstitucion_seq', 1, false);


--
-- Name: tb_universidad_iduniversidad_seq; Type: SEQUENCE SET; Schema: public; Owner: gestion5
--

SELECT pg_catalog.setval('public.tb_universidad_iduniversidad_seq', 1, false);


--
-- Name: tipousu_idtipusu_seq; Type: SEQUENCE SET; Schema: public; Owner: gestion5
--

SELECT pg_catalog.setval('public.tipousu_idtipusu_seq', 1, false);


--
-- Name: users_idusu_seq; Type: SEQUENCE SET; Schema: public; Owner: gestion5
--

SELECT pg_catalog.setval('public.users_idusu_seq', 126, true);


--
-- Name: añofinacademico añofinacademico_pkey; Type: CONSTRAINT; Schema: public; Owner: gestion5
--

ALTER TABLE ONLY public."añofinacademico"
    ADD CONSTRAINT "añofinacademico_pkey" PRIMARY KEY (idfinacademico);


--
-- Name: añoinicioacademico añoinicioacademico_pkey; Type: CONSTRAINT; Schema: public; Owner: gestion5
--

ALTER TABLE ONLY public."añoinicioacademico"
    ADD CONSTRAINT "añoinicioacademico_pkey" PRIMARY KEY (idinicioacademico);


--
-- Name: formacionpostgrado formacionpostgrado_pkey; Type: CONSTRAINT; Schema: public; Owner: gestion5
--

ALTER TABLE ONLY public.formacionpostgrado
    ADD CONSTRAINT formacionpostgrado_pkey PRIMARY KEY (idformacionpostgrado);


--
-- Name: formacionpregrado formacionpregrado_pkey; Type: CONSTRAINT; Schema: public; Owner: gestion5
--

ALTER TABLE ONLY public.formacionpregrado
    ADD CONSTRAINT formacionpregrado_pkey PRIMARY KEY (idformacionpregrado);


--
-- Name: formacionsubpostgrado formacionsubpostgrado_pkey; Type: CONSTRAINT; Schema: public; Owner: gestion5
--

ALTER TABLE ONLY public.formacionsubpostgrado
    ADD CONSTRAINT formacionsubpostgrado_pkey PRIMARY KEY (idsubpostgrado);


--
-- Name: sectorempresarial sectorempresarial_pkey; Type: CONSTRAINT; Schema: public; Owner: gestion5
--

ALTER TABLE ONLY public.sectorempresarial
    ADD CONSTRAINT sectorempresarial_pkey PRIMARY KEY (idsectorempresarial);


--
-- Name: selecformacioncontinua selecformacioncontinua_pkey; Type: CONSTRAINT; Schema: public; Owner: gestion5
--

ALTER TABLE ONLY public.selecformacioncontinua
    ADD CONSTRAINT selecformacioncontinua_pkey PRIMARY KEY (idselecformacioncontinua);


--
-- Name: tb_acercadeti_consultor tb_acercadeti_consultor_pkey; Type: CONSTRAINT; Schema: public; Owner: gestion5
--

ALTER TABLE ONLY public.tb_acercadeti_consultor
    ADD CONSTRAINT tb_acercadeti_consultor_pkey PRIMARY KEY (idpostulante);


--
-- Name: tb_carrerauniversitaria tb_carrerauniversitaria_pkey; Type: CONSTRAINT; Schema: public; Owner: gestion5
--

ALTER TABLE ONLY public.tb_carrerauniversitaria
    ADD CONSTRAINT tb_carrerauniversitaria_pkey PRIMARY KEY (idcarrea);


--
-- Name: tb_experiencialaboral tb_experiencialaboral_pkey; Type: CONSTRAINT; Schema: public; Owner: gestion5
--

ALTER TABLE ONLY public.tb_experiencialaboral
    ADD CONSTRAINT tb_experiencialaboral_pkey PRIMARY KEY (idexperiencialaboral);


--
-- Name: tb_formacioncontinua tb_formacioncontinua_pkey; Type: CONSTRAINT; Schema: public; Owner: gestion5
--

ALTER TABLE ONLY public.tb_formacioncontinua
    ADD CONSTRAINT tb_formacioncontinua_pkey PRIMARY KEY (idformacioncontinua);


--
-- Name: tb_formacioninicial tb_formacioninicial_pkey; Type: CONSTRAINT; Schema: public; Owner: gestion5
--

ALTER TABLE ONLY public.tb_formacioninicial
    ADD CONSTRAINT tb_formacioninicial_pkey PRIMARY KEY (idformacioninicial);


--
-- Name: tb_habilidades_consultor tb_habilidades_consultor_pkey; Type: CONSTRAINT; Schema: public; Owner: gestion5
--

ALTER TABLE ONLY public.tb_habilidades_consultor
    ADD CONSTRAINT tb_habilidades_consultor_pkey PRIMARY KEY (idconsultor);


--
-- Name: tb_institucioneducativa tb_institucioneducativa_pkey; Type: CONSTRAINT; Schema: public; Owner: gestion5
--

ALTER TABLE ONLY public.tb_institucioneducativa
    ADD CONSTRAINT tb_institucioneducativa_pkey PRIMARY KEY (idinstitucion);


--
-- Name: tb_tipodedocumento tb_tipodedocumento_pkey; Type: CONSTRAINT; Schema: public; Owner: gestion5
--

ALTER TABLE ONLY public.tb_tipodedocumento
    ADD CONSTRAINT tb_tipodedocumento_pkey PRIMARY KEY (iddocumento);


--
-- Name: tb_universidad tb_universidad_pkey; Type: CONSTRAINT; Schema: public; Owner: gestion5
--

ALTER TABLE ONLY public.tb_universidad
    ADD CONSTRAINT tb_universidad_pkey PRIMARY KEY (iduniversidad);


--
-- Name: tip_doc tip_doc_pkey; Type: CONSTRAINT; Schema: public; Owner: gestion5
--

ALTER TABLE ONLY public.tip_doc
    ADD CONSTRAINT tip_doc_pkey PRIMARY KEY (id);


--
-- Name: tipodeformacioninicial tipodeformacioninicial_pkey; Type: CONSTRAINT; Schema: public; Owner: gestion5
--

ALTER TABLE ONLY public.tipodeformacioninicial
    ADD CONSTRAINT tipodeformacioninicial_pkey PRIMARY KEY (idtipodeformacion);


--
-- Name: tipousu tipousu_pkey; Type: CONSTRAINT; Schema: public; Owner: gestion5
--

ALTER TABLE ONLY public.tipousu
    ADD CONSTRAINT tipousu_pkey PRIMARY KEY (idtipusu);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: gestion5
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (email);


--
-- Name: tb_acercadeti_consultor tb_acercadeti_consultor_email_fkey; Type: FK CONSTRAINT; Schema: public; Owner: gestion5
--

ALTER TABLE ONLY public.tb_acercadeti_consultor
    ADD CONSTRAINT tb_acercadeti_consultor_email_fkey FOREIGN KEY (email) REFERENCES public.users(email);


--
-- Name: tb_acercadeti_consultor tb_acercadeti_consultor_iddocumento_fkey; Type: FK CONSTRAINT; Schema: public; Owner: gestion5
--

ALTER TABLE ONLY public.tb_acercadeti_consultor
    ADD CONSTRAINT tb_acercadeti_consultor_iddocumento_fkey FOREIGN KEY (iddocumento) REFERENCES public.tb_tipodedocumento(iddocumento);


--
-- Name: tb_experiencialaboral tb_experiencialaboral_email_fkey; Type: FK CONSTRAINT; Schema: public; Owner: gestion5
--

ALTER TABLE ONLY public.tb_experiencialaboral
    ADD CONSTRAINT tb_experiencialaboral_email_fkey FOREIGN KEY (email) REFERENCES public.users(email);


--
-- Name: tb_formacioncontinua tb_formacioncontinua_email_fkey; Type: FK CONSTRAINT; Schema: public; Owner: gestion5
--

ALTER TABLE ONLY public.tb_formacioncontinua
    ADD CONSTRAINT tb_formacioncontinua_email_fkey FOREIGN KEY (email) REFERENCES public.users(email);


--
-- Name: tb_formacioninicial tb_formacioninicial_email_fkey; Type: FK CONSTRAINT; Schema: public; Owner: gestion5
--

ALTER TABLE ONLY public.tb_formacioninicial
    ADD CONSTRAINT tb_formacioninicial_email_fkey FOREIGN KEY (email) REFERENCES public.users(email);


--
-- Name: tb_formacioninicial tb_formacioninicial_idformacionpostgrado_fkey; Type: FK CONSTRAINT; Schema: public; Owner: gestion5
--

ALTER TABLE ONLY public.tb_formacioninicial
    ADD CONSTRAINT tb_formacioninicial_idformacionpostgrado_fkey FOREIGN KEY (idformacionpostgrado) REFERENCES public.formacionpostgrado(idformacionpostgrado);


--
-- Name: tb_formacioninicial tb_formacioninicial_idformacionpregrado_fkey; Type: FK CONSTRAINT; Schema: public; Owner: gestion5
--

ALTER TABLE ONLY public.tb_formacioninicial
    ADD CONSTRAINT tb_formacioninicial_idformacionpregrado_fkey FOREIGN KEY (idformacionpregrado) REFERENCES public.formacionpregrado(idformacionpregrado);


--
-- Name: tb_formacioninicial tb_formacioninicial_idsubpostgrado_fkey; Type: FK CONSTRAINT; Schema: public; Owner: gestion5
--

ALTER TABLE ONLY public.tb_formacioninicial
    ADD CONSTRAINT tb_formacioninicial_idsubpostgrado_fkey FOREIGN KEY (idsubpostgrado) REFERENCES public.formacionsubpostgrado(idsubpostgrado);


--
-- Name: tb_formacioninicial tb_formacioninicial_idtipodeformacion_fkey; Type: FK CONSTRAINT; Schema: public; Owner: gestion5
--

ALTER TABLE ONLY public.tb_formacioninicial
    ADD CONSTRAINT tb_formacioninicial_idtipodeformacion_fkey FOREIGN KEY (idtipodeformacion) REFERENCES public.tipodeformacioninicial(idtipodeformacion);


--
-- Name: tb_habilidades_consultor tb_habilidades_consultor_email_fkey; Type: FK CONSTRAINT; Schema: public; Owner: gestion5
--

ALTER TABLE ONLY public.tb_habilidades_consultor
    ADD CONSTRAINT tb_habilidades_consultor_email_fkey FOREIGN KEY (email) REFERENCES public.users(email);


--
-- Name: users users_tipusu_fkey; Type: FK CONSTRAINT; Schema: public; Owner: gestion5
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_tipusu_fkey FOREIGN KEY (tipusu) REFERENCES public.tipousu(idtipusu);


--
-- Name: DATABASE gestion5_talento_db; Type: ACL; Schema: -; Owner: postgres
--

GRANT ALL ON DATABASE gestion5_talento_db TO gestion5;


--
-- PostgreSQL database dump complete
--

