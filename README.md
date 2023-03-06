# [Home Remodeling contractors' App](https://paulsorkin.github.io/homaze-test-task/)

### Works utilizing React, Redux Toolkit and Styled-Components.
### Fetches data from my own JSON web server.

## Task description
[Link to Figma doc](https://www.figma.com/file/0oxgD8jvXjIsG4t0h7NGFc/Homaze---Development-(Copy)?node-id=4404%3A2314&t=wLdQ4ppTI5gZ3qAC-1)

“Works contractor” is a person that handles/manages projects in the home remodeling area. A contractor has a web app based dashboard where he could manage his projects.

We want to implement a new screen for him to give him the ability to look up his existing projects based on some criteria and represent them in a friendly-user way.

Available projects are listed and represented in “tile” view. Those projects are ordered by last updated date (from new to old). Each tile represents information about a customer, like its name and its unique ID, address in a predefined format, rooms names included in the project (ex.:Kitchen, Bathroom, Living Room), last updated date of the project in format MM.DD.YYYY, the total cost of the project in currency format and project state.

Additionally, the screen has a look-up functionality. The action is being performed in real-time while the contractor enters some text in the textbox. Please note, in order to activate the search, need to insert at least 2 characters. Contractor could search by name of the customer or its address.

Filtered “tiles” will be presented on the screen in the default order. If no results - no tile is present on the screen, it is blank.

Notes:
●	Implemented design should be “pixel-perfect”
●	Code should be clear, have performance optimized, no console log printings
●	CSS should be well-defined and have clear names
●	You’re welcome to use any CSS/React plugin library
●	Preferable to use Redux (preferable) or another app state container library
●	Preferable to use React Hooks
●	Consider the screen is used by desktop and by mobile users.
●	Data should be fetched from some mock API (mocki.io, mockapi.io etc)
●	JSON response found [here](https://codebeautify.org/jsonviewer/y232b92c2)


[My solution deploy is here](https://paulsorkin.github.io/homaze-test-task/)
