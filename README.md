# mf-nest

Technical assessment in nest.js.

## Overview

Convert a date to its Roman representation.  
Adds the ip from [ipify](https://www.ipify.org/) to the response.  

Swagger is available [here](http://localhost:3000/swagger).  

The /roman-date endpoint accepts valid any date format (american style: year/month/day for instance)  
Roman date follows this format : day.month.year  

## Endpoints

```
GET /roman-date
query: 
- date

Example:
/roman-date?date=11/02/1998

Response:
{
	date:	string
	ip:		string
}
```
