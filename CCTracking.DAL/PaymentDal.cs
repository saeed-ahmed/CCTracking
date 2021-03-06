﻿using CCTracking.Dto;
using CCTracking.Dto.Response;
using System;
using System.Collections.Generic;
using System.Data;

namespace CCTracking.DAL
{
    public class PaymentDal : DBFacade
    {
        protected override string GetByIdSql(int id, Dictionary<string, object> dictionary)
        {
            dictionary.Add("Id", id);
            return "GetPaymentById";
        }
        protected override string GetAllSql()
        {
            return "GetAllPayment";
        }
        protected override string GetByCriteriaSql(BaseModel baseModel, Dictionary<string, object> dictionary)
        {
            Payment payment = (Payment)baseModel;
            dictionary.Add("@Id", payment.Id);
            //multiple criteria..
            return "select * from Payment where id =@id";
        }
        protected override string ExecuteSql(BaseModel baseModel, Dictionary<string, object> dictionary)
        {
            Payment payment = (Payment)baseModel;
            dictionary.Add("Id", payment.Id);
            dictionary.Add("@BookingId", payment.BookingId);
            dictionary.Add("@PaymentType", payment.PaymentType);
            dictionary.Add("@Amount", payment.Amount);
            dictionary.Add("@PaymentLocation", payment.PaymentLocation);
            dictionary.Add("@OfficerId", payment.OfficerId);
            dictionary.Add("@ReceiptNo", payment.ReceiptNo);
            //dictionary.Add("@ExtraAmountCharge", payment.ExtraAmountCharge);
            //dictionary.Add("@ExtraAmountReason", payment.ExtraAmountReason);
            //dictionary.Add("@ExtraAmountReceipt", payment.ExtraAmountReceipt);
            dictionary.Add("@PaymentStatus", payment.PaymentStatus);
            dictionary.Add("@EasyPaisaTranNo", payment.EasyPaisaTranNo);
            dictionary.Add("@IsReferralBookingPaid", payment.IsReferralBookingPaid);
            dictionary.Add("@ReferralPaymentDate", payment.ReferralPaymentDate);
            dictionary.Add("@CreatedBy", payment.CreatedBy);
            dictionary.Add("@ModifiedBy", payment.ModifiedBy);
            dictionary.Add("@ModifiedDate", payment.ModifiedDate);
            return "SavePayment";
        }

        protected override BaseModelResponse ConvertToModel(IDataReader dr)
        {
            PaymentResponse paymentResponse = new PaymentResponse();
            Payment payment = null;
            while (dr.Read())
            {
                payment = new Payment();
                MapValues(payment, dr);
                paymentResponse.PaymentModel = payment;
            }
            return paymentResponse;
        }
        protected override BaseModelResponse ConvertToList(IDataReader dr)
        {
            BookingResponse bookingResponse = new BookingResponse();
            List<Booking> bookings = new List<Booking>();
            Booking booking = null;
            while (dr.Read())
            {
                booking = new Booking();
                MapValues(booking, dr);
                bookings.Add(booking);
            }
            bookingResponse.BookingList = bookings;
            return bookingResponse;
        }
        protected override BaseModelResponse ConvertToList(DataSet ds)
        {
            return null;
        }

        protected override string DelByIdSql(int id, Dictionary<string, object> dictionary)
        {
            return string.Empty;
        }

        protected override string GetCountSql()
        {
            return string.Empty;
        }      

        private void MapValues(Payment payment, IDataReader dr)
        {
            payment.Id = dr["Id"] == DBNull.Value ? 0 : Convert.ToInt32(dr["Id"]);
            payment.BookingId = dr["BookingId"] == DBNull.Value ? 0 : Convert.ToInt32(dr["BookingId"]);
            payment.PaymentType = dr["PaymentType"] == DBNull.Value ? (byte) 0 : Convert.ToByte(dr["PaymentType"]);
            payment.Amount = dr["Amount"] == DBNull.Value ? 0 : Convert.ToDecimal(dr["Amount"]);
            payment.PaymentLocation = dr["PaymentLocation"] == DBNull.Value ? 0 : Convert.ToInt32(dr["PaymentLocation"]);
            payment.OfficerId = dr["OfficerId"] == DBNull.Value ? 0 : Convert.ToInt32(dr["OfficerId"]);
            payment.ReceiptNo = dr["ReceiptNo"].ToString();
            payment.ExtraAmountCharge = dr["ExtraAmountCharge"] == DBNull.Value ? 0 : Convert.ToDecimal(dr["ExtraAmountCharge"]);
            payment.ExtraAmountReason = dr["ExtraAmountReason"].ToString();
            payment.ExtraAmountReceipt = dr["ExtraAmountReceipt"].ToString();
            payment.PaymentStatus = dr["PaymentStatus"] == DBNull.Value ? (byte)0 : Convert.ToByte(dr["PaymentStatus"]);
            payment.EasyPaisaTranNo = dr["EasyPaisaTranNo"].ToString();
            payment.CreatedBy = dr["CreatedBy"] == DBNull.Value ? 0 : Convert.ToInt32(dr["CreatedBy"]);
            payment.ModifiedBy = dr["ModifiedBy"] == DBNull.Value ? 0 : Convert.ToInt32(dr["ModifiedBy"]);

            payment.IsReferralBooking = dr["IsReferralBooking"] == DBNull.Value ? false : Convert.ToBoolean(dr["IsReferralBooking"]);
            payment.IsReferralBookingPaid = dr["IsReferralBookingPaid"] == DBNull.Value ? false : Convert.ToBoolean(dr["IsReferralBookingPaid"]);
            payment.ReferralPaymentDate = dr["ReferralPaymentDate"] == DBNull.Value ? DateTime.MinValue : Convert.ToDateTime(dr["ReferralPaymentDate"]);
        }


        protected override BaseModelResponse ConvertToListGrid(IDataReader dr)
        {
            throw new NotImplementedException();
        }
    }
}
