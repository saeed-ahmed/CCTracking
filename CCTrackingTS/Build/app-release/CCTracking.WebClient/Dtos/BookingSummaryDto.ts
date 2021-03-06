﻿/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
/// <reference path="../../Scripts/typings/backbone/backbone.d.ts" />

/// <amd-dependency path="jquery"/>
/// <amd-dependency path="backbone"/>

export module Models {
    export class BookingSummaryDto extends Backbone.Model {
        default() {
            return {
                alkhidmatCentre: "",
                alkhidmatCentreId: "",
                bookingAmount: "",
                bookingMilage: "",
                bookings: "",
                receivables: "",
                busNo: "",
                busId: "",
                visitTypeId: "",
                visitType: "",
                visitDate: "",
                outTime: "",
                inTime: "",
                timeTaken: "",
                driver: "",
                averageMilage:"",
                currentReading: "",
                previusReading: "",
                fuelQuantity: "",
                fuelRate: "",
                pumpLocation:"",
                fuelingReceipt:"",

                createdBy: "",
                createdDate: "",
                errorMessage: "",
                id: "",
                isActive: "",
                modifiedBy: "",
                modifiedDate: "",
                paidAmount: "",
                paidBooking: "",
                unpaidAmount: "",
                unpaidBooking: ""
            }
        }
    }

    export class BookingSummaryCollection extends Backbone.Collection {
        constructor(options?: any) {
            this.model = BookingSummaryDto;
            super(options);
        }
    }
}
