import { Document, Types } from "mongoose";

export interface Iinstitute extends Document{
    applicationNo: string;

    user: Types.ObjectId;

    instituteDetails: {
        instituteName: string;
        address: string;
        academicYear: string;
        date: string;
        state: string;
        district: string;
        city: string;
        pincode: string;
        aisheCode: string;
        applicationNo: string;
    };

    instituteTrust: {
        trustName: string;
        establishmentYear: number;
    };

    registrationSPOC: {
        spocName: string;
        spocEmail: string;
        spocPhone: string;
        spocPAN: string;
    };

    instituteInfo: {
        aicteZone: string;
        instituteType: string;
        intake: [
            {
                branch: string;
                ug: number;
                pg: number;
            }
        ];
    };
    
    financialManagement: {
        bankName: string;
        ifscCode: string;
    };

    paymentStatus: string;

    receiptUrl: string;
}