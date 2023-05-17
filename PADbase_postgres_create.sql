CREATE TABLE "users" (
	"id" serial NOT NULL,
	"username" varchar(255) NOT NULL UNIQUE,
	"password" varchar(255) NOT NULL,
	"first_name" varchar(255),
	"last_name" varchar(255),
	"pronouns" varchar(255),
	"photo_url" varchar(255),
	"cohort" integer,
	"company" integer,
	"job_title" varchar(255),
	"emp_since" DATE DEFAULT 'today',
	"bio" varchar(1200),
	"current_tech" varchar(255),
	"fav_tech" varchar(255),
	"email_1" varchar(255) UNIQUE,
	"email_2" varchar(255),
	"portfolio_url" varchar(255),
	"linkedin_url" varchar(255),
	"github_url" varchar(255),
	"facebook_url" varchar(255),
	"twitter_url" varchar(255),
	"blog_url" varchar(255),
	"custom_url_name_1" varchar(255),
	"custom_url_1" varchar(255) UNIQUE,
	"custom_url_name_2" varchar(255) UNIQUE,
	"custom_url_2" varchar(255) UNIQUE,
	"custom_url_name_3" varchar(255) UNIQUE,
	"custom_url_3" varchar(255) UNIQUE,
	"custom_url_name_4" varchar(255) UNIQUE,
	"custom_url_4" varchar(255) UNIQUE,
	CONSTRAINT "users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "companies" (
	"id" serial NOT NULL UNIQUE,
	"name" varchar(255) NOT NULL UNIQUE,
	"city" varchar(255) NOT NULL,
	"state" varchar(2) NOT NULL,
	CONSTRAINT "companies_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "cohorts" (
	"id" serial NOT NULL UNIQUE,
	"name" varchar(255) NOT NULL UNIQUE,
	"campus" integer NOT NULL,
	CONSTRAINT "cohorts_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "campuses" (
	"id" serial NOT NULL UNIQUE,
	"name" varchar(255) NOT NULL UNIQUE,
	"state" varchar(2) NOT NULL,
	CONSTRAINT "campuses_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "tech_types" (
	"id" serial NOT NULL UNIQUE,
	"name" integer NOT NULL UNIQUE,
	"alt_name" integer NOT NULL UNIQUE,
	"description" varchar(255),
	CONSTRAINT "tech_types_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "user_settings" (
	"id" serial NOT NULL UNIQUE,
	"user_id" integer NOT NULL UNIQUE,
	"dark_mode" BOOLEAN NOT NULL DEFAULT 'TRUE',
	CONSTRAINT "user_settings_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "users" ADD CONSTRAINT "users_fk0" FOREIGN KEY ("cohort") REFERENCES "cohorts"("id");
ALTER TABLE "users" ADD CONSTRAINT "users_fk1" FOREIGN KEY ("company") REFERENCES "companies"("id");


ALTER TABLE "cohorts" ADD CONSTRAINT "cohorts_fk0" FOREIGN KEY ("campus") REFERENCES "campuses"("id");



ALTER TABLE "user_settings" ADD CONSTRAINT "user_settings_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");


