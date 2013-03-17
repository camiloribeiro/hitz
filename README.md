Hitz - (╯°□°）╯︵ ┻━┻ 
====

Simple Meteor app to count number of hits in real time.
This app was developed to test the performance load tool rake-jmeter (https://github.com/camiloribeiro/rake-jmeter)

If you don't wanna test load generators this app is useless to you :( I am sorry.... But if you want to test load generators feel free to run it :D

disclaimer: I am not a js developer, and actually, I am not even a developer... so protect your eyes when looking this code :)

Running
=======

install note.js

    http://nodejs.org/download/

Install meteor and meteorite:

    $ curl https://install.meteor.com | /bin/sh
    $ sudo npm install -g meteorite

Amazing:

    $ git clone git@github.com:camiloribeiro/hitz.git
    $ cd hitz
    $ mrt

To request use: 

    http://localhost:3000/server/<id>  i.e. "/server/Server01"

To monitore use: 

    http://localhost:3000/
  
To clear the database using request use: 

    http://localhost:3000/clear/

What's next?
========

The clear buttons is not working. In the future I want that button to clear the database. 

Have fun

LICENSE
=======

Copyright 2012 Camilo Ribeiro camilo@camiloribeiro.com

This file is part of Hitz.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

