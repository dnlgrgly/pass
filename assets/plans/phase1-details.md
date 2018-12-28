# WORK IN PROGRESS

# Detailed execution plan for Phase 1 - QR code based pass system

## User-facing features
* Basic auth (register, login, forgot password, etc.)
* Basic pass flow (browse and purchase passes, be able to hand over the pass to the inspector/access gates for validation)

## Screens
The same as defined in [Daniel Korpai's conpect](https://szifon.com/2017/07/30/bkk-online-shop-design-koncepcio/)

## Backend

### Models

#### `user` model
```
{
    id: String, // Unique ID for every user. The API will be able to identify the user with this property
    eID: String, // The government-issued ID card number (or student/passport ID)
    name: String, // The name of the user
    email: String, // The email address of the user
    hash: String, // The hash of the password
    purchases: [Pass], // Array of every Pass the user bought, ever
    activePasses: [Pass] // Array of currently valid passes. It's an array because the user can have multiple passes at the same time (e.g. a Budapest-pass and a metropolitan area pass for suburban railway)
}
```

#### `passType` model
```
{
    id: String, // Unique ID for every pass type. The API will be able to identify the pass type with this property
    name: { en: String, hu: String, ... }, // The user-facing name of the pass or ticket
    price: Number, // the price of the pass in the local currency
    validity: { minutes: Number, days: Number }, // At the time of the purchase, the backend can compute the validity of the pass from these values by "adding" them to the current date
    limitDist: 0, // This is a Budapest-specific property that defines the distance from Budapest where the pass is still valid. For example, in the case of a 5 km metropolitan area pass, it is 5.
}
```

#### `pass` model
```
{
    id: String // Unique ID for the pass
    owner: String, // The owner's user ID
    type: String, // The passType ID
    purchaseDate: Date, // The date when the pass was purchased
    validUntil: Date // The date until the pass is valid
}
```

### API endpoints and their behaviour

#### user-related endpoints

##### `/login`
This endpoint can be used for logging in the user
**params:**
```
{
    email: String,
    hash: String
}
```

**response:**
```
{
    ...user object,
    token: String
}
```

##### `/register`
This endpoint can be used for registering a new user
```
{
    eID: String,
    email: String,
    name: String,
    hash: String
}
```

**response:**
```
{
    ...user object,
    token: String
}
```

##### `/resetPassword`
This endpoint can be used to ask for a new password
**params:**
```
{
    email: String,
}
```

##### `/get/${id}`
This endpoint can be used to retrieve a user's data from the backend

**response:** `user` object

##### `/delete`
This endpoint can be used to completely delete a user within a 14 day timeout
**params:**
```
{
    email: String,
    hash: String
}
```


#### pass-related endpoints

##### `/purchase`
This endpoint can be used to purchase a pass
**params:**
```
{
    owner: String,
    type: String
}
```

**response:** `pass` object

##### `/get/${id}`
This endpoint can be used to get a pass' data

**response:** `pass` object


#### inspector endpoints

##### `/validate/${id}`
This endpoint can be used to validate the ticket or pass by the inspector

**response:**
```
{
    isValid: Boolean,
    reason: String
}
```


## Hardware needs for cities
* A smartphone with an NFC reader and camera for every inspector that can access internet
  * The OS does not matter as the inspection is PWA-based

### At the end of this phase, the paper-based tickets and passes cannot be replaced yet as this is only a partial/additional solution for Budapest's problem.