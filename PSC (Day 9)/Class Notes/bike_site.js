// cities
//     - name
//     - cityImageUrl
//     - createdAt
//     - updatedAt
// bikes // Honda Activa, Splendor
//     - name
//     - bikeImageUrl
//     - createdAt
//     - updatedAt
// actual_bikes
//     - rcNumber
//     - chasisNumber
//     - bikeId
// areas // Vishal Nagar, Gomati Nagar
//     - name
//     - cityId
//     - createdAt
//     - updatedAt
// bike_area
//     - bikeId // Activa
//     - areaId // Taj mahal, South Mumbai
//     - depositRequired ( default to 0 )
// checked_out
//     - bikeAreaId
//     - checkedOutAt ( default to null ) // 14 Mar // start time of booking
//     - willBeCheckedInAt ( default to null ) // 16 Mar // end time of booking
//     - totalCost ( defaults to 0)
// bike_area_tariff
//     - bike_area_id
//     - monThu10hrs 
//     - monThu24hrs - 22/hr
//     - fri-sun - 22/hr
//     - 7Days
//     - 15Days
//     - 30Days
//     - allowedKmPerHour
//     - extraKmPerHourCharge
// 13th to 16th
// 13th => if numberOfHours < 10 22 per hour else 25 per hour * no. of hours
// 14th => 22 per hour * 24
// 15th => 22 per hour * 24
// 16th => if numberOfHours < 10 22 per hour else 25 per hour * no. of hours
// // Activa is booked from 14th Mar - 16th Mar
// /// wants Activa for 17th Mar