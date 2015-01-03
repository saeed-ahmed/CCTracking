﻿using System.Collections.Generic;
using CCTracking.Dto.Audit;

namespace CCTracking.Dto.Response
{
    public class RefundBookingResponse : BaseModelResponse
    {
        public RefundBooking RefundBookingModel { get; set; }
        public List<RefundBooking> RefundBookingList { get; set; }
        public List<AuditDisplay> AuditRefundBookingDisplayList { get; set; }
        public List<AuditRefundBooking> AuditRefundBookingList { get; set; }
    }
}
