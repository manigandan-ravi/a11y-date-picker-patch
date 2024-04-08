# a11y-date-picker-patch
Contains the patch for the issues in a11y-date-picker library which is used in Freshservice support portal v2

# Issue
- A11y date picker hides the invalid rows.
- A row is considered invalid if all the dates in a row cannot be selected.
- The issue is with the logic used to identify the invalid row. The current logic just checks the first date / last date in a row and decides if it is invalid

# Fix
- Changed the logic to check if atleast one selectable date is present then the row is considered valid and shouldn't be hidden.

# Usage
Paste the below code at the end of _Admin > Servicedesk Rebarnding > Customise support portal > **Head**_ or **Footer**

`<script defer src="https://manigandan-ravi.github.io/a11y-date-picker-patch/hideInvalidRow-patch.js"></script>`
