package com.shirokov.e_commerce_app.model;

public class PaymentDetails {

    private String paymentMethod;
    private String status;
    private String paymentId;
    private String yKassaPaymentLinkId;
    private String yKassaPaymentLinkReferenceId;
    private String yKassaPaymentLinkStatus;
    private String yKassaPaymentId;

    public PaymentDetails() {
    }

    public PaymentDetails(String paymentMethod, String status, String paymentId,
                          String yKassaPaymentLinkId, String yKassaPaymentLinkReferenceId, String yKassaPaymentLinkStatus, String yKassaPaymentId) {
        this.paymentMethod = paymentMethod;
        this.status = status;
        this.paymentId = paymentId;
        this.yKassaPaymentLinkId = yKassaPaymentLinkId;
        this.yKassaPaymentLinkReferenceId = yKassaPaymentLinkReferenceId;
        this.yKassaPaymentLinkStatus = yKassaPaymentLinkStatus;
        this.yKassaPaymentId = yKassaPaymentId;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(String paymentId) {
        this.paymentId = paymentId;
    }

    public String getyKassaPaymentLinkId() {
        return yKassaPaymentLinkId;
    }

    public void setyKassaPaymentLinkId(String yKassaPaymentLinkId) {
        this.yKassaPaymentLinkId = yKassaPaymentLinkId;
    }

    public String getyKassaPaymentLinkReferenceId() {
        return yKassaPaymentLinkReferenceId;
    }

    public void setyKassaPaymentLinkReferenceId(String yKassaPaymentLinkReferenceId) {
        this.yKassaPaymentLinkReferenceId = yKassaPaymentLinkReferenceId;
    }

    public String getyKassaPaymentLinkStatus() {
        return yKassaPaymentLinkStatus;
    }

    public void setyKassaPaymentLinkStatus(String yKassaPaymentLinkStatus) {
        this.yKassaPaymentLinkStatus = yKassaPaymentLinkStatus;
    }

    public String getyKassaPaymentId() {
        return yKassaPaymentId;
    }

    public void setyKassaPaymentId(String yKassaPaymentId) {
        this.yKassaPaymentId = yKassaPaymentId;
    }
}
