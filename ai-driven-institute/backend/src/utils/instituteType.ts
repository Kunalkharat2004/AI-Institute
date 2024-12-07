import { Document, Types } from "mongoose";

export interface Iinstitute extends Document{
    applicationNo: string;

    user: Types.ObjectId;
    date: string;
    instituteDetails: {
        instituteName: string;
        address: string;
        academicYear: string;
        state: string;
        district: string;
        city: string;
        pincode: string;
        aisheCode: string;
        applicationNo: string;
        collegeEstablishmentYear: number;
    };
    university: {
        universityName: string;
        universityType: string;
        universityCode: string;
        universityAddress: string;
        establishmentYear: number;
        universityContact: {
            email: string;
            phone: string;
        };
        universityWebsite: string;
    };
    instituteTrust: {
        trustName: string;
        trustRegistrationNo: string;
        trustAddress: string;
        establishmentYear: number;
    };

    registrationSPOC: {
        spocName: string;
        spocEmail: string;
        spocPhone: string;
        spocPAN: string;
        designation: string;
    };

    principalDetails: {
        principalName: string;
        principalEmail: string;
        principalPhone: string;
        principalPAN: string;
        isDoctorDegree: boolean;
        designation: string;
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
        accountNo: string;
        bankName: string;
        ifscCode: string;
    };

    paymentStatus: string;

    receiptUrl: string;
}