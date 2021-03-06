﻿using CCTracking.Api.App_Start;
using CCTracking.DAL;
using CCTracking.Dto;
using CCTracking.Dto.Response;
using System;
using System.Web.Http;

namespace CCTracking.Api.Controllers
{
    [BasicHttpAuthorize]
    public class BusVisitController : ApiController
    {
        [HttpPost]
        public BusVisit SaveBusVisit(BusVisit busVisit)
        {
            if (busVisit != null)
            {
                //booking.Id = rowCounter++;
                DBFacade facade = new BusVisitDal();
                if (busVisit.Id <= 0)
                {
                    busVisit.CreatedDate = busVisit.ModifiedDate = DateTime.Today;
                    busVisit.CreatedBy = busVisit.ModifiedBy;
                }
                else
                {
                    busVisit.ModifiedDate = DateTime.Today;
                }
                //if ((VisitTypes)busVisit.VisitTypeId != VisitTypes.PatrolPump)
                //{
                //    busVisit.PumpLocation = string.Empty;
                //    busVisit.FuelAmount = busVisit.FuelRate = 0;
                //}

                //used for booking & maintainance
                if ((VisitTypes)busVisit.VisitTypeId != VisitTypes.Booking && (VisitTypes)busVisit.VisitTypeId != VisitTypes.Maintenance)
                {
                    busVisit.IsBookingCompleted = false;
                }
                BaseModelResponse response = facade.Execute(busVisit);
                busVisit = ((BusVisitResponse)response).BusVisitModel;
            }
            return busVisit;
        }

        [HttpGet]
        public LookupResponse BusVisitDefault()
        {
            DBFacade facade = new LookupDal();
            BaseModelResponse baseModelResponse = facade.ExecuteDs(null);
            LookupResponse lookupResponse = (LookupResponse)baseModelResponse;
            return lookupResponse;
        }

        [HttpGet]
        public BaseModelResponse GetAll(int idAll)
        {
            DBFacade facade = new BusVisitDal();

            facade.IsGridDisplay = true;
            SearchCriteria criteria = new SearchCriteria { Id = idAll, FromBookingDate = facade.GetStartDate(), ToBookingDate = DateTime.Today };
            BaseModelResponse baseModelResponse = facade.GetByCriteria(criteria);
//            BaseModelResponse baseModelResponse = facade.GetAllGrid(idAll);
            //BusVisitResponse response = (BusVisitResponse)baseModelResponse;
            return baseModelResponse;
        }

        [HttpGet]
        public BusVisitResponse GetById(int id)
        {
            DBFacade facade = new BusVisitDal();
            BaseModelResponse baseModelResponse = facade.GetById(id);
            BusVisitResponse response = (BusVisitResponse)baseModelResponse;
            return response;
        }
    }
}