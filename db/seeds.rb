# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

conduit_1 = Conduit.find_or_create_by(tag: 'K-01', size: 1, from: 'A', to: 'B')
conduit_1.cables.find_or_create_by(tag: 'P-01')
conduit_1.cables.find_or_create_by(tag: 'P-02')

conduit_2 = Conduit.find_or_create_by(tag: 'K-02', size: 1, from: 'A', to: 'B')
conduit_2.cables.find_or_create_by(tag: 'P-03')
conduit_2.cables.find_or_create_by(tag: 'P-04')

conduit_3 = Conduit.find_or_create_by(tag: 'K-03', size: 1, from: 'A', to: 'B')
conduit_3.cables.find_or_create_by(tag: 'P-05')
conduit_3.cables.find_or_create_by(tag: 'P-06')
