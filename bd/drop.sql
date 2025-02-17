-- Drop tables in reverse order of dependencies
DROP TABLE IF EXISTS jeux CASCADE;
DROP TABLE IF EXISTS application_topiques CASCADE;
DROP TABLE IF EXISTS applications CASCADE;
DROP TABLE IF EXISTS topiques CASCADE;
DROP TABLE IF EXISTS activites CASCADE;
DROP TABLE IF EXISTS historique CASCADE;
DROP TABLE IF EXISTS membres CASCADE;
DROP TABLE IF EXISTS classes CASCADE;
DROP TABLE IF EXISTS domaines CASCADE;
DROP TABLE IF EXISTS utilisateurs CASCADE;
DROP TABLE IF EXISTS locataires CASCADE;

-- Drop type
DROP TYPE IF EXISTS c_type_enum CASCADE;