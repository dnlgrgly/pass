# Pass
An open-source public transport e-ticket system.

**Public demo coming in a few months, stay tuned!**

* [Follow us on Facebook](https://www.facebook.com/PassTransport)
* [Follow us on Twitter](https://twitter.com/PassTransport)
* [Donate on Patreon](https://www.patreon.com/PassTransport)

![Pass banner with slogan](https://github.com/dandesz198/pass/blob/master/assets/Banner%20-%20with%20slogan.png?raw=true)

## What's this about?
Budapest already tried to accomplish creating a system like MetroCard or Oyster several times with projects like Electra or RIGO, but they failed every time. The main goal of this project is to create an open-source e-ticket system that's suitable for cities.

## Are you serious?
Yes, totally. Also, it's our school project, so we are definietly going to work on this consistently so that we don't get a bad grade.

## Main goals
* *Phase 1* Develop a QR-code based e-ticket and pass system (feature set like BKK Online Shop) [Execution details](/phase1-details.md)
* *Phase 2* Add support for NFC inspecting with phone and cards (feature set like BKK Rigo) [Execution details](/phase2-details.md)
  * Possibly build a demo with an NFC card
* *Phase 3* Add support for prepaid-type accounts (like MTA (NYC) MetroCard) [Execution details](/phase3-details.md)
* *Phase 4* Get a city to use this system [Implementation plan for cities](/phase4-details.md)
  * We'll probably need support for the Hungarian e-ID card system (via NFC) so that we match with the government's main goals
* *Phase 5* Add advanced data analysis and reporting tools to the admin panel

## While developing, try to keep an eye on
* Writing readable, reusable, clean, efficient and modern code
* Consistent, `camelCased` naming
* Avoiding code or feature duplication
* Avoiding dependency hell, use as few dependencies as possible
* Security, because it's a must: we are trying to get a *real* city to use this system, thus we need to try to live up to some privacy and security standards.

## How can I contribute?
* **If you want to help in development,** you can grab cards from our [Trello board](https://trello.com/b/QhJUPS7o/pass). *Feel free to [drop a line](mailto:daniel.gergely@risingstack.com) if you want to be a member of the board*
* **If you found a bug,** create an `Issue` or create a card on our Trello board in the `Bugs` column.
* **For feature requests**, drop us a line or create a card in the `Features` column.

## Contributors
* @dandesz198 [Facebook](https://fb.me/dandesz198) [Blog](https://blog.risingstack.com/author/danielg/)
* @hajdupetke [Facebook](https://fb.me/hajdupetke) [Twitter](https://twitter.com/hajdupetke)

## Resources
[Design conception for the passanger-facing frontend](https://szifon.com/2017/07/30/bkk-online-shop-design-koncepcio/)

[Branding assets and stuff (Adobe XD)](https://xd.adobe.com/spec/9dcdf89b-04bb-4434-4c9d-3ba40da735e6-ebfc/)

[react-stax documentation](https://http://react-stax.now.sh)

## Bug bounty!
Once we'll have enough money from donations, we'll try to host a bug bounty event, that's mainly focused on security issues.

## Support us!
If you want to support our hard work, pay for the infrastucture, or donate for a bug bounty event, you can [donate to us via PayPal](https://paypal.me/dandesz198), or [support us regularly on Patreon](https://www.patreon.com/PassTransport)
