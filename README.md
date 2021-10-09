# Car registration

**FR**
Should be possible to register a new car
Should be possible to list all categories

**BR**
Should not be possible to register a car with an existing license plate
Should not be possible to change the license plate of an already registered car
The car should be registered, by default, with availability
The user responsible for registration should be an administrator user


# Car listing

**FR**
Should be possible to list all available cars
Should be possible to list all available cars by category name
Should be possible to list all available cars by brand name
Should be possible to list all available cars by car name

# Car specification registration

**FR**
Should be possible to register a specification for a car
Should be possible to list all cars
Should be possible to register all specifications

**BR**
Should not be possible to register a specification for an unregistered car
Should not be possible to register an existing specification for the same car
The user responsible for registration should be an administrator user

# Car image registration

**FR**
Should be possible to register car image
Should be possible to list all cars

**NFR**
Use multer to upload files

**BR**
The user should be able to register more than one image for the same car
The user responsible for registration should be an administrator user

# Car rental

**FR**
Should be possible to register a rental

**BR**
The rent should have a minimum duration of 24 hours
Should not be possible to register a new rental if there is already one open for the same user
Should not be possible to register a new rental if there is already one open for the same car