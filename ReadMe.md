##Problem Statement : 

[Click here](problemstatement.png).

##Solution Design : 

    Assumption : Slots interval is extenalise property which is set to 0.05 for 5 mins.

    App.js
        Employee(name, startTime, endTime, Calender)
            Calender(slots) -> getAvailableSlots(), bookSlot()
                Slots <- Arrays<Slot>  -> getAvailableSlots(), bookSlot()
                    Slot(time, isAvailable) -> book()
        
        SlotFinder() -> getAvailableSlots()
        Display() -> printSlot()


####[Test Results](./coverage/lcov-report/index.html) 

###How to : 
    -   yarn install
    -   yarn test
    -   to run the app 
        -   yarn src/App.js


Thumbs up `:thumbsup:` to Tushar Pawar for great support.