--
-- PostgreSQL database dump
--

-- Dumped from database version 14.3 (Ubuntu 14.3-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.3 (Ubuntu 14.3-0ubuntu0.22.04.1)

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

DROP DATABASE IF EXISTS "talento-db";
--
-- Name: talento-db; Type: DATABASE; Schema: -; Owner: gestion5
--

CREATE DATABASE "talento-db" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';


ALTER DATABASE "talento-db" OWNER TO gestion5;

\connect -reuse-previous=on "dbname='talento-db'"

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
-- Name: user_education; Type: TABLE; Schema: public; Owner: gestion5
--

CREATE TABLE public.user_education (
    id integer NOT NULL,
    user_id integer,
    educational_level character varying NOT NULL,
    level_obtained character varying NOT NULL,
    institution character varying NOT NULL,
    graduation_degree character varying NOT NULL,
    proof_date date NOT NULL,
    document character varying,
    collegiate integer
);


ALTER TABLE public.user_education OWNER TO gestion5;

--
-- Name: user_education_id_seq; Type: SEQUENCE; Schema: public; Owner: gestion5
--

CREATE SEQUENCE public.user_education_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_education_id_seq OWNER TO gestion5;

--
-- Name: user_education_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gestion5
--

ALTER SEQUENCE public.user_education_id_seq OWNED BY public.user_education.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: gestion5
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying NOT NULL,
    password character varying NOT NULL,
    disclaimer date,
    account_creation date,
    last_session date,
    session_token character varying,
    password_token character varying,
    time_token character varying
);


ALTER TABLE public.users OWNER TO gestion5;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: gestion5
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO gestion5;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gestion5
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: users_information; Type: TABLE; Schema: public; Owner: gestion5
--

CREATE TABLE public.users_information (
    id integer NOT NULL,
    user_id integer,
    name character varying NOT NULL,
    m_last_name character varying NOT NULL,
    f_last_name character varying NOT NULL,
    birthday date,
    cellphone_code character varying NOT NULL,
    cellphone character varying NOT NULL,
    document_type character varying NOT NULL,
    document_number character varying NOT NULL
);


ALTER TABLE public.users_information OWNER TO gestion5;

--
-- Name: users_information_id_seq; Type: SEQUENCE; Schema: public; Owner: gestion5
--

CREATE SEQUENCE public.users_information_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_information_id_seq OWNER TO gestion5;

--
-- Name: users_information_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gestion5
--

ALTER SEQUENCE public.users_information_id_seq OWNED BY public.users_information.id;


--
-- Name: user_education id; Type: DEFAULT; Schema: public; Owner: gestion5
--

ALTER TABLE ONLY public.user_education ALTER COLUMN id SET DEFAULT nextval('public.user_education_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: gestion5
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: users_information id; Type: DEFAULT; Schema: public; Owner: gestion5
--

ALTER TABLE ONLY public.users_information ALTER COLUMN id SET DEFAULT nextval('public.users_information_id_seq'::regclass);


--
-- Data for Name: user_education; Type: TABLE DATA; Schema: public; Owner: gestion5
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: gestion5
--

INSERT INTO public.users VALUES (2, 'recluter@gmail.com', 'dfdadads', NULL, '2022-06-17', '2022-06-17', NULL, NULL, NULL);
INSERT INTO public.users VALUES (3, 'recluter@gmail.com', 'dfdadads', NULL, '2022-06-17', '2022-06-17', NULL, NULL, NULL);
INSERT INTO public.users VALUES (4, 'recluter@gmail.com', 'dfdadads', NULL, '2022-06-17', '2022-06-17', NULL, NULL, NULL);
INSERT INTO public.users VALUES (5, 'recluter@gmail.com', 'dfdadads', NULL, '2022-06-17', '2022-06-17', NULL, NULL, NULL);
INSERT INTO public.users VALUES (7, 'recluter@gmail.com', 'sdasdasd', NULL, '2022-06-17', '2022-06-17', NULL, NULL, NULL);
INSERT INTO public.users VALUES (9, 'recluter@gmail.com', 'asdsadsa', NULL, '2022-06-17', '2022-06-17', NULL, NULL, NULL);
INSERT INTO public.users VALUES (11, 'recluter@gmail.com', 'sadsadsa', NULL, '2022-06-17', '2022-06-17', NULL, NULL, NULL);
INSERT INTO public.users VALUES (12, 'recluter@gmail.com', 'sadsadsa', NULL, '2022-06-17', '2022-06-17', NULL, NULL, NULL);
INSERT INTO public.users VALUES (14, 'ashupingahua@gestionayaprende.com', 'sadsadsad', NULL, '2022-06-17', '2022-06-17', NULL, NULL, NULL);
INSERT INTO public.users VALUES (16, 'salazoom3@gestionayaprende.com', 'dasdsad', NULL, '2022-06-17', '2022-06-17', NULL, NULL, NULL);
INSERT INTO public.users VALUES (19, 'salazoom3@gestionayaprende.com', 'asdsadas', NULL, '2022-06-17', '2022-06-17', NULL, NULL, NULL);
INSERT INTO public.users VALUES (27, 'recluter@gmail.com', 'sdsfsdafafad', NULL, '2022-06-17', '2022-06-17', NULL, NULL, NULL);
INSERT INTO public.users VALUES (29, 'recluter@gmail.com', 'safadfadfasf', NULL, '2022-06-17', '2022-06-17', NULL, NULL, NULL);


--
-- Data for Name: users_information; Type: TABLE DATA; Schema: public; Owner: gestion5
--

INSERT INTO public.users_information VALUES (1, 27, 'Jorge', 'Martínez', 'Collazos', '2022-06-17', 'PE', '983593021', 'DNI', '23423432432');
INSERT INTO public.users_information VALUES (2, 29, 'Jorge', 'Martínez', 'Collazos', '2022-06-16', 'PE', '983593021', 'DNI', '13123123');


--
-- Name: user_education_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gestion5
--

SELECT pg_catalog.setval('public.user_education_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gestion5
--

SELECT pg_catalog.setval('public.users_id_seq', 29, true);


--
-- Name: users_information_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gestion5
--

SELECT pg_catalog.setval('public.users_information_id_seq', 2, true);


--
-- Name: users_information user_information; Type: CONSTRAINT; Schema: public; Owner: gestion5
--

ALTER TABLE ONLY public.users_information
    ADD CONSTRAINT user_information PRIMARY KEY (id);


--
-- Name: user_education users_education; Type: CONSTRAINT; Schema: public; Owner: gestion5
--

ALTER TABLE ONLY public.user_education
    ADD CONSTRAINT users_education PRIMARY KEY (id);


--
-- Name: users users_pk; Type: CONSTRAINT; Schema: public; Owner: gestion5
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pk PRIMARY KEY (id);


--
-- Name: user_education_id_uindex; Type: INDEX; Schema: public; Owner: gestion5
--

CREATE UNIQUE INDEX user_education_id_uindex ON public.user_education USING btree (id);


--
-- Name: users_id_uindex; Type: INDEX; Schema: public; Owner: gestion5
--

CREATE UNIQUE INDEX users_id_uindex ON public.users USING btree (id);


--
-- Name: users_information_id_uindex; Type: INDEX; Schema: public; Owner: gestion5
--

CREATE UNIQUE INDEX users_information_id_uindex ON public.users_information USING btree (id);


--
-- Name: user_education user_education_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: gestion5
--

ALTER TABLE ONLY public.user_education
    ADD CONSTRAINT user_education_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: users_information users_information_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: gestion5
--

ALTER TABLE ONLY public.users_information
    ADD CONSTRAINT users_information_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

