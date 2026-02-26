
import React, { useState, useEffect } from 'react';

// Icons (placeholders, in a real app these would be imported from a library like react-icons)
const IconDashboard = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V7h-8v14zm0-18v4h8V3h-8z"/></svg>;
const IconTickets = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>;
const IconUsers = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>;
const IconSettings = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.09-.75-1.7-.98l-.35-2.5c-.05-.24-.27-.42-.51-.42h-4c-.24 0-.46.18-.5.42l-.35 2.5c-.61.23-1.18.58-1.7.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.12.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.09.75 1.7.98l.35 2.5c.05.24.27.42.51.42h4c.24 0 .46-.18.5-.42l.35-2.5c.61-.23 1.18-.58 1.7-.98l2.49 1c.22.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>;
const IconNotification = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.93 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>;
const IconSearch = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>;
const IconLogout = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5-5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/></svg>;
const IconArrowRight = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>;
const IconArrowUp = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7 14l5-5 5 5z"/></svg>;
const IconArrowDown = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg>;
const IconCheckCircle = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>;
const IconInfo = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>;
const IconWarning = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>;
const IconError = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>;
const IconClock = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.9 15h-2.8v-7h4.1v2h-1.3v5zM12 7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>;
const IconHistory = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3L10.5 16.29c1.1.92 2.52 1.41 4 1.41 3.31 0 6-2.69 6-6s-2.69-6-6-6z"/></svg>;
const IconCar = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>;
const IconDollar = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-1c-1.39 0-2-1.02-2-2.5 0-1.42.84-2.52 2-2.5s2 .91 2 2h2c0-2.42-1.72-4-4-4-2.76 0-5 2.04-5 5 0 2.92 2.03 5 5 5h2v1zm.7-10.7c-1.39 0-2-.86-2-2.3 0-1.28.84-2.2 2-2.2s2 .82 2 2h2c0-2.32-1.72-3.8-4-3.8-2.76 0-5 1.76-5 4.8 0 1.93 1.25 3.16 3 3.65v.35h-2v2h2v1h2v-1c1.39 0 2 .86 2 2.3 0 1.28-.84 2.2-2 2.2s-2-.82-2-2h-2c0 2.32 1.72 3.8 4 3.8 2.76 0 5-1.76 5-4.8 0-1.93-1.25-3.16-3-3.65V7.3h2V5.3h-2v-1h-2v1z"/></svg>;

const ROLES = {
    ADMIN: 'ADMIN',
    VEHICLE_OWNER: 'VEHICLE_OWNER',
    COMPLIANCE_REVIEWER: 'COMPLIANCE_REVIEWER',
    ENFORCEMENT_OFFICER: 'ENFORCEMENT_OFFICER',
};

const STATUS_MAP = {
    PENDING_REVIEW: { label: 'Pending Review', color: 'var(--status-pending)' },
    ISSUED: { label: 'Issued', color: 'var(--status-issued)' },
    PAID: { label: 'Paid', color: 'var(--status-paid)' },
    APPEALED: { label: 'Appealed', color: 'var(--status-appealed)' },
    REJECTED: { label: 'Rejected', color: 'var(--status-rejected)' },
    DISMISSED: { label: 'Dismissed', color: 'var(--status-dismissed)' },
    OVERDUE: { label: 'Overdue', color: 'var(--status-overdue)' },
    IN_REVIEW: { label: 'In Review', color: 'var(--status-in-review)' },
};

// --- Dummy Data ---
const dummyTickets = [
    {
        id: 'TKT-001',
        violationType: 'Illegal Parking Zone',
        licensePlate: 'ABC-123',
        vehicleMake: 'Honda',
        vehicleModel: 'Civic',
        officer: 'John Doe',
        issuedDate: '2023-10-26 10:30 AM',
        dueDate: '2023-11-26',
        fineAmount: 75.00,
        status: 'PENDING_REVIEW',
        location: 'Main St & Elm Ave',
        evidenceUrl: 'https://images.unsplash.com/photo-1621980846067-c25528ac11a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
        auditLog: [
            { timestamp: '2023-10-26 10:30 AM', user: 'John Doe', action: 'Ticket Issued' },
            { timestamp: '2023-10-26 11:00 AM', user: 'System', action: 'Notification Sent to Owner' },
        ],
        workflow: [
            { stage: 'Issued', date: '2023-10-26 10:30 AM', by: 'John Doe' },
            { stage: 'Pending Review', date: null, by: null },
            { stage: 'Payment Due', date: null, by: null },
            { stage: 'Resolved', date: null, by: null },
        ],
    },
    {
        id: 'TKT-002',
        violationType: 'Expired Meter',
        licensePlate: 'XYZ-987',
        vehicleMake: 'Toyota',
        vehicleModel: 'Camry',
        officer: 'Jane Smith',
        issuedDate: '2023-10-25 09:15 AM',
        dueDate: '2023-11-25',
        fineAmount: 50.00,
        status: 'PAID',
        location: 'Oak St Parking Lot',
        evidenceUrl: 'https://images.unsplash.com/photo-1629858348616-24e5d6664d93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
        auditLog: [
            { timestamp: '2023-10-25 09:15 AM', user: 'Jane Smith', action: 'Ticket Issued' },
            { timestamp: '2023-10-25 09:30 AM', user: 'System', action: 'Notification Sent to Owner' },
            { timestamp: '2023-10-26 02:00 PM', user: 'Vehicle Owner', action: 'Fine Paid Online' },
            { timestamp: '2023-10-26 02:01 PM', user: 'System', action: 'Status updated to PAID' },
        ],
        workflow: [
            { stage: 'Issued', date: '2023-10-25 09:15 AM', by: 'Jane Smith' },
            { stage: 'Payment Due', date: '2023-10-25 09:15 AM', by: 'System' },
            { stage: 'Resolved', date: '2023-10-26 02:01 PM', by: 'System (Paid)' },
        ],
    },
    {
        id: 'TKT-003',
        violationType: 'Handicap Zone Violation',
        licensePlate: 'PQR-456',
        vehicleMake: 'BMW',
        vehicleModel: 'X5',
        officer: 'Alice Brown',
        issuedDate: '2023-10-24 01:00 PM',
        dueDate: '2023-11-24',
        fineAmount: 250.00,
        status: 'APPEALED',
        location: 'City Hall Parking',
        evidenceUrl: 'https://images.unsplash.com/photo-1621980846067-c25528ac11a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
        auditLog: [
            { timestamp: '2023-10-24 01:00 PM', user: 'Alice Brown', action: 'Ticket Issued' },
            { timestamp: '2023-10-24 01:30 PM', user: 'System', action: 'Notification Sent to Owner' },
            { timestamp: '2023-10-25 10:00 AM', user: 'Vehicle Owner', action: 'Appeal Submitted' },
            { timestamp: '2023-10-25 10:01 AM', user: 'System', action: 'Status updated to APPEALED' },
        ],
        workflow: [
            { stage: 'Issued', date: '2023-10-24 01:00 PM', by: 'Alice Brown' },
            { stage: 'Payment Due', date: '2023-10-24 01:00 PM', by: 'System' },
            { stage: 'Appealed', date: '2023-10-25 10:01 AM', by: 'Vehicle Owner' },
            { stage: 'In Review', date: null, by: null },
            { stage: 'Appeal Decision', date: null, by: null },
            { stage: 'Resolved', date: null, by: null },
        ],
    },
    {
        id: 'TKT-004',
        violationType: 'No Permit Zone',
        licensePlate: 'DEF-789',
        vehicleMake: 'Ford',
        vehicleModel: 'Focus',
        officer: 'John Doe',
        issuedDate: '2023-10-23 04:00 PM',
        dueDate: '2023-11-23',
        fineAmount: 100.00,
        status: 'REJECTED',
        location: 'University Campus P2',
        evidenceUrl: 'https://images.unsplash.com/photo-1629858348616-24e5d6664d93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
        auditLog: [
            { timestamp: '2023-10-23 04:00 PM', user: 'John Doe', action: 'Ticket Issued' },
            { timestamp: '2023-10-23 04:30 PM', user: 'System', action: 'Notification Sent to Owner' },
            { timestamp: '2023-10-24 09:00 AM', user: 'Compliance Reviewer', action: 'Ticket Rejected (Insufficient Evidence)' },
            { timestamp: '2023-10-24 09:01 AM', user: 'System', action: 'Status updated to REJECTED' },
        ],
        workflow: [
            { stage: 'Issued', date: '2023-10-23 04:00 PM', by: 'John Doe' },
            { stage: 'Pending Review', date: '2023-10-23 04:00 PM', by: 'System' },
            { stage: 'Rejected', date: '2023-10-24 09:01 AM', by: 'Compliance Reviewer' },
            { stage: 'Resolved', date: '2023-10-24 09:01 AM', by: 'System (Rejected)' },
        ],
    },
    {
        id: 'TKT-005',
        violationType: 'Parking Overtime',
        licensePlate: 'GHI-012',
        vehicleMake: 'Nissan',
        vehicleModel: 'Altima',
        officer: 'Jane Smith',
        issuedDate: '2023-10-22 11:00 AM',
        dueDate: '2023-11-22',
        fineAmount: 60.00,
        status: 'PAID',
        location: 'Downtown Metered Zone',
        evidenceUrl: 'https://images.unsplash.com/photo-1621980846067-c25528ac11a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
        auditLog: [
            { timestamp: '2023-10-22 11:00 AM', user: 'Jane Smith', action: 'Ticket Issued' },
            { timestamp: '2023-10-22 11:30 AM', user: 'System', action: 'Notification Sent to Owner' },
            { timestamp: '2023-10-23 01:00 PM', user: 'Vehicle Owner', action: 'Fine Paid Online' },
            { timestamp: '2023-10-23 01:01 PM', user: 'System', action: 'Status updated to PAID' },
        ],
        workflow: [
            { stage: 'Issued', date: '2023-10-22 11:00 AM', by: 'Jane Smith' },
            { stage: 'Payment Due', date: '2023-10-22 11:00 AM', by: 'System' },
            { stage: 'Resolved', date: '2023-10-23 01:01 PM', by: 'System (Paid)' },
        ],
    },
    {
        id: 'TKT-006',
        violationType: 'Loading Zone Violation',
        licensePlate: 'LMN-345',
        vehicleMake: 'Mercedes',
        vehicleModel: 'Sprinter',
        officer: 'Alice Brown',
        issuedDate: '2023-10-21 08:45 AM',
        dueDate: '2023-11-21',
        fineAmount: 120.00,
        status: 'ISSUED',
        location: 'Commercial District Alley',
        evidenceUrl: 'https://images.unsplash.com/photo-1629858348616-24e5d6664d93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
        auditLog: [
            { timestamp: '2023-10-21 08:45 AM', user: 'Alice Brown', action: 'Ticket Issued' },
            { timestamp: '2023-10-21 09:00 AM', user: 'System', action: 'Notification Sent to Owner' },
        ],
        workflow: [
            { stage: 'Issued', date: '2023-10-21 08:45 AM', by: 'Alice Brown' },
            { stage: 'Payment Due', date: '2023-10-21 08:45 AM', by: 'System' },
            { stage: 'Resolved', date: null, by: null },
        ],
    },
    {
        id: 'TKT-007',
        violationType: 'Double Parking',
        licensePlate: 'OPQ-678',
        vehicleMake: 'Audi',
        vehicleModel: 'A4',
        officer: 'John Doe',
        issuedDate: '2023-10-20 03:20 PM',
        dueDate: '2023-11-20',
        fineAmount: 150.00,
        status: 'PENDING_REVIEW',
        location: 'Residential Street - Near School',
        evidenceUrl: 'https://images.unsplash.com/photo-1621980846067-c25528ac11a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
        auditLog: [
            { timestamp: '2023-10-20 03:20 PM', user: 'John Doe', action: 'Ticket Issued' },
            { timestamp: '2023-10-20 03:40 PM', user: 'System', action: 'Notification Sent to Owner' },
        ],
        workflow: [
            { stage: 'Issued', date: '2023-10-20 03:20 PM', by: 'John Doe' },
            { stage: 'Pending Review', date: null, by: null },
            { stage: 'Payment Due', date: null, by: null },
            { stage: 'Resolved', date: null, by: null },
        ],
    },
];

const dummyUsers = [
    { id: 'USR-001', name: 'Admin User', email: 'admin@example.com', role: ROLES.ADMIN, avatar: 'AU' },
    { id: 'USR-002', name: 'Officer John', email: 'john@example.com', role: ROLES.ENFORCEMENT_OFFICER, avatar: 'JD' },
    { id: 'USR-003', name: 'Vehicle Owner', email: 'owner@example.com', role: ROLES.VEHICLE_OWNER, avatar: 'VO' },
    { id: 'USR-004', name: 'Compliance Reviewer', email: 'reviewer@example.com', role: ROLES.COMPLIANCE_REVIEWER, avatar: 'CR' },
    { id: 'USR-005', name: 'Officer Jane', email: 'jane@example.com', role: ROLES.ENFORCEMENT_OFFICER, avatar: 'JS' },
];

const dummyKpis = [
    { id: 'kpi1', title: 'Total Tickets Issued', value: 1250, trend: '+5%', type: 'positive', icon: <IconTickets /> },
    { id: 'kpi2', title: 'Outstanding Fines', value: '$85,200', trend: '-2%', type: 'negative', icon: <IconDollar /> },
    { id: 'kpi3', title: 'Tickets in Review', value: 12, trend: '+3', type: 'positive', icon: <IconInfo /> },
    { id: 'kpi4', title: 'Paid Tickets This Month', value: 450, trend: '+15%', type: 'positive', icon: <IconCheckCircle /> },
];

const dummyActivities = [
    { id: 'act1', type: 'ticket_issued', description: 'Ticket <strong>TKT-007</strong> issued to OPQ-678 by John Doe.', time: '5 mins ago' },
    { id: 'act2', type: 'payment_received', description: 'Payment received for ticket <strong>TKT-005</strong>.', time: '1 hour ago' },
    { id: 'act3', type: 'appeal_submitted', description: 'Appeal submitted for ticket <strong>TKT-003</strong> by Vehicle Owner.', time: '3 hours ago' },
    { id: 'act4', type: 'ticket_rejected', description: 'Ticket <strong>TKT-004</strong> rejected by Compliance Reviewer.', time: 'yesterday' },
    { id: 'act5', type: 'user_login', description: 'Admin User logged in.', time: 'yesterday' },
];

const dummyCharts = [
    { id: 'chart1', title: 'Tickets by Status', type: 'donut', data: [{ name: 'Paid', value: 60 }, { name: 'Issued', value: 20 }, { name: 'Appealed', value: 10 }, { name: 'Pending', value: 10 }] },
    { id: 'chart2', title: 'Revenue Trend (Monthly)', type: 'line', data: [{ month: 'Jan', value: 10000 }, { month: 'Feb', value: 12000 }, { month: 'Mar', value: 11000 }] },
    { id: 'chart3', title: 'Violations by Type', type: 'bar', data: [{ type: 'Illegal', value: 50 }, { type: 'Expired', value: 30 }, { type: 'Handicap', value: 15 }] },
];

function App() {
    const [view, setView] = useState({ screen: 'DASHBOARD', params: {} });
    const [currentUserRole, setCurrentUserRole] = useState(ROLES.ADMIN); // Default role for demo
    const [toasts, setToasts] = useState([]);

    const navigate = (screen, params = {}) => {
        setView({ screen, params });
    };

    const handleLogout = () => {
        // Simulate logout logic
        console.log('User logged out.');
        setCurrentUserRole(null); // Or redirect to login screen
    };

    const addToast = (message, type = 'success') => {
        const id = Date.now();
        setToasts((prevToasts) => [...prevToasts, { id, message, type }]);
        setTimeout(() => {
            setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
        }, 5000); // Toast disappears after 5 seconds
    };

    // --- Reusable Components ---

    const Sidebar = ({ currentScreen }) => (
        <div className="sidebar">
            <div className="sidebar-logo">
                <img src="https://assets-global.website-files.com/604e33bf67b93108c9d4b045/626d0df07f79a97d40dd11b2_logofavicon.png" alt="Smart Parking Logo" />
                <h2>Smart Park</h2>
            </div>
            <nav className="sidebar-nav">
                <div
                    className={`sidebar-nav-item ${currentScreen === 'DASHBOARD' ? 'active' : ''}`}
                    onClick={() => navigate('DASHBOARD')}
                >
                    <IconDashboard />
                    <span>Dashboard</span>
                </div>
                <div
                    className={`sidebar-nav-item ${currentScreen === 'TICKETS' ? 'active' : ''}`}
                    onClick={() => navigate('TICKETS')}
                >
                    <IconTickets />
                    <span>Tickets</span>
                </div>
                {(currentUserRole === ROLES.ADMIN || currentUserRole === ROLES.COMPLIANCE_REVIEWER) && (
                    <div
                        className={`sidebar-nav-item ${currentScreen === 'USERS' ? 'active' : ''}`}
                        onClick={() => navigate('USERS')}
                    >
                        <IconUsers />
                        <span>Users</span>
                    </div>
                )}
                <div
                    className={`sidebar-nav-item ${currentScreen === 'SETTINGS' ? 'active' : ''}`}
                    onClick={() => navigate('SETTINGS')}
                >
                    <IconSettings />
                    <span>Settings</span>
                </div>
            </nav>
            <div
                className="sidebar-nav-item"
                onClick={handleLogout}
                style={{ marginTop: 'auto', color: 'var(--color-accent-danger)' }}
            >
                <IconLogout />
                <span>Logout</span>
            </div>
        </div>
    );

    const Header = () => (
        <header className="header">
            <div className="header-search">
                <IconSearch />
                <input type="text" placeholder="Global search..." />
            </div>
            <div className="header-actions">
                <button aria-label="Notifications">
                    <IconNotification />
                </button>
                <div className="user-profile" onClick={() => navigate('PROFILE')}>
                    <div className="user-profile-avatar">{currentUserRole?.substring(0, 2) || 'US'}</div>
                    <span className="user-profile-name">{currentUserRole || 'Guest'}</span>
                </div>
            </div>
        </header>
    );

    const Breadcrumbs = ({ path }) => (
        <div className="breadcrumbs">
            {path?.map((item, index) => (
                <React.Fragment key={item?.label || index}>
                    {index > 0 && <span>/</span>}
                    {item?.onClick ? (
                        <a href="#" onClick={() => item.onClick()}>{item?.label}</a>
                    ) : (
                        <span>{item?.label}</span>
                    )}
                </React.Fragment>
            ))}
        </div>
    );

    const KPITile = ({ kpi, pulse = false }) => (
        <div className={`kpi-tile ${pulse ? 'pulse-animation' : ''}`} onClick={() => addToast(`Showing details for ${kpi?.title}`, 'info')}>
            <h5 className="kpi-title">{kpi?.title}</h5>
            <div className="kpi-value">
                {kpi?.value}
            </div>
            {kpi?.trend && (
                <div className={`kpi-trend ${kpi?.type === 'positive' ? 'positive' : 'negative'}`}>
                    {kpi?.type === 'positive' ? <IconArrowUp /> : <IconArrowDown />}
                    {kpi?.trend}
                </div>
            )}
        </div>
    );

    const ChartCard = ({ chart }) => (
        <div className="chart-container" onClick={() => addToast(`Loading interactive ${chart?.type} chart for ${chart?.title}`, 'info')}>
            <h4 className="chart-title">{chart?.title}</h4>
            <div className="chart-placeholder">
                <p>{chart?.type} Chart Placeholder</p>
            </div>
        </div>
    );

    const RecentActivitiesPanel = ({ activities }) => (
        <div className="recent-activities glass-panel">
            <h3 style={{ marginBottom: 'var(--spacing-lg)' }}>Recent Activities</h3>
            <div className="recent-activities-list">
                {activities?.map((activity) => (
                    <div className="activity-item" key={activity?.id}>
                        <div className="activity-icon">
                            {activity?.type === 'ticket_issued' && <IconTickets />}
                            {activity?.type === 'payment_received' && <IconDollar />}
                            {activity?.type === 'appeal_submitted' && <IconInfo />}
                            {activity?.type === 'ticket_rejected' && <IconError />}
                            {activity?.type === 'user_login' && <IconUsers />}
                        </div>
                        <div className="activity-details">
                            <p dangerouslySetInnerHTML={{ __html: activity?.description }}></p>
                            <span className="time">{activity?.time}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const TicketCard = ({ ticket }) => (
        <div className="card" onClick={() => navigate('TICKET_DETAIL', { id: ticket?.id })}>
            <div className="card-header">
                <h4 className="card-title">{ticket?.id}</h4>
                <span className={`status-badge status-${ticket?.status?.toUpperCase()}`}>
                    {STATUS_MAP[ticket?.status]?.label || ticket?.status}
                </span>
            </div>
            <div className="card-content">
                <p><strong>Violation:</strong> {ticket?.violationType}</p>
                <p><strong>License Plate:</strong> {ticket?.licensePlate}</p>
                <p><strong>Location:</strong> {ticket?.location}</p>
                <p><strong>Fine:</strong> ${ticket?.fineAmount?.toFixed(2)}</p>
            </div>
            <div className="card-footer">
                <span className="card-meta">Issued: {ticket?.issuedDate?.split(' ')[0]}</span>
                <span className="card-detail-action">View Details <IconArrowRight /></span>
            </div>
        </div>
    );

    // --- Screens ---

    const DashboardScreen = () => {
        return (
            <div className="main-content">
                <h1 style={{ marginBottom: 'var(--spacing-xl)' }}>Dashboard Overview</h1>

                <div className="dashboard-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                    {dummyKpis?.map((kpi) => (
                        <KPITile key={kpi?.id} kpi={kpi} pulse={kpi?.id === 'kpi3'} />
                    ))}
                </div>

                <div className="dashboard-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', marginBottom: 'var(--spacing-xl)' }}>
                    {dummyCharts?.map((chart) => (
                        <ChartCard key={chart?.id} chart={chart} />
                    ))}
                </div>

                <div style={{ gridColumn: '1 / -1' }}>
                    <RecentActivitiesPanel activities={dummyActivities} />
                </div>
            </div>
        );
    };

    const TicketsScreen = () => {
        const [filterStatus, setFilterStatus] = useState('ALL');
        const [searchTerm, setSearchTerm] = useState('');

        const filteredTickets = dummyTickets?.filter(ticket =>
            (filterStatus === 'ALL' || ticket?.status === filterStatus) &&
            (ticket?.licensePlate?.toLowerCase().includes(searchTerm.toLowerCase()) ||
             ticket?.violationType?.toLowerCase().includes(searchTerm.toLowerCase()) ||
             ticket?.id?.toLowerCase().includes(searchTerm.toLowerCase()))
        );

        return (
            <div className="main-content">
                <h1 style={{ marginBottom: 'var(--spacing-xl)' }}>Parking Tickets</h1>

                <div className="glass-panel" style={{ marginBottom: 'var(--spacing-lg)', display: 'flex', gap: 'var(--spacing-md)', flexWrap: 'wrap', alignItems: 'center' }}>
                    <div className="header-search" style={{ maxWidth: '300px', margin: 0 }}>
                        <IconSearch />
                        <input
                            type="text"
                            placeholder="Search tickets..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        style={{
                            padding: 'var(--spacing-sm) var(--spacing-md)',
                            borderRadius: 'var(--border-radius-sm)',
                            border: '1px solid var(--color-glass-border)',
                            background: 'var(--color-glass-bg)',
                            color: 'var(--color-text-primary)',
                            outline: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        <option value="ALL">All Statuses</option>
                        {Object.keys(STATUS_MAP)?.map(statusKey => (
                            <option key={statusKey} value={statusKey}>{STATUS_MAP[statusKey]?.label}</option>
                        ))}
                    </select>
                    <button className="btn btn-primary" onClick={() => addToast('Simulating bulk action...', 'info')}>Bulk Approve</button>
                    <button className="btn btn-ghost" onClick={() => addToast('Simulating export to Excel...', 'info')}>Export to Excel</button>
                </div>

                <div className="card-grid">
                    {filteredTickets?.length > 0 ? (
                        filteredTickets?.map((ticket) => (
                            <TicketCard key={ticket?.id} ticket={ticket} />
                        ))
                    ) : (
                        <div className="glass-panel" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: 'var(--spacing-xl)' }}>
                            <img src="https://cdni.iconscout.com/illustration/premium/thumb/not-found-7910243-6330379.png" alt="No records found" style={{ maxWidth: '200px', marginBottom: 'var(--spacing-md)' }}/>
                            <h3 style={{ color: 'var(--color-text-primary)' }}>No Tickets Found</h3>
                            <p style={{ color: 'var(--color-text-secondary)' }}>Adjust your filters or try a different search term.</p>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    const TicketDetailScreen = ({ ticketId }) => {
        const ticket = dummyTickets?.find((t) => t?.id === ticketId);

        if (!ticket) {
            return (
                <div className="detail-view-container">
                    <h1 style={{ color: 'var(--status-rejected)' }}>Ticket Not Found</h1>
                    <p>The ticket with ID {ticketId} does not exist.</p>
                    <button className="btn btn-secondary" onClick={() => navigate('TICKETS')}>Back to Tickets</button>
                </div>
            );
        }

        const currentWorkflowStageIndex = ticket?.workflow?.findIndex(stage => stage?.date === null && stage?.by === null);
        const activeWorkflowIndex = currentWorkflowStageIndex !== -1 ? currentWorkflowStageIndex - 1 : ticket?.workflow?.length - 1;


        const handleAction = (actionType) => {
            let message = '';
            let type = 'info';
            switch (actionType) {
                case 'approve':
                    message = `Ticket ${ticket?.id} approved for payment.`;
                    type = 'success';
                    break;
                case 'reject':
                    message = `Ticket ${ticket?.id} rejected.`;
                    type = 'error';
                    break;
                case 'edit':
                    message = `Opening edit form for ${ticket?.id}.`;
                    type = 'info';
                    break;
                case 'pay':
                    message = `Simulating payment for ${ticket?.id}.`;
                    type = 'success';
                    break;
                default:
                    message = `Action "${actionType}" on ${ticket?.id} triggered.`;
            }
            addToast(message, type);
        };

        return (
            <div className="detail-view-container">
                <div className="detail-view-header">
                    <div className="detail-view-title-actions">
                        <Breadcrumbs path={[{ label: 'Tickets', onClick: () => navigate('TICKETS') }, { label: ticket?.id }]} />
                        <div className="detail-view-title">
                            <h1>{ticket?.id}</h1>
                            <span className={`status-badge status-${ticket?.status?.toUpperCase()}`}>
                                {STATUS_MAP[ticket?.status]?.label || ticket?.status}
                            </span>
                        </div>
                    </div>
                    <div className="detail-actions">
                        {ticket?.status === 'PENDING_REVIEW' && currentUserRole === ROLES.COMPLIANCE_REVIEWER && (
                            <>
                                <button className="btn btn-primary" onClick={() => handleAction('approve')}>Approve</button>
                                <button className="btn btn-danger" onClick={() => handleAction('reject')}>Reject</button>
                            </>
                        )}
                        {(currentUserRole === ROLES.ADMIN || currentUserRole === ROLES.ENFORCEMENT_OFFICER) && (
                            <button className="btn btn-ghost" onClick={() => handleAction('edit')}>Edit Ticket</button>
                        )}
                        {ticket?.status === 'ISSUED' && currentUserRole === ROLES.VEHICLE_OWNER && (
                             <button className="btn btn-secondary" onClick={() => handleAction('pay')}>Pay Fine</button>
                        )}
                        <button className="btn btn-ghost" onClick={() => navigate('TICKETS')}>Back to List</button>
                    </div>
                </div>

                <div className="detail-sections">
                    <div className="detail-main-info">
                        <div className="detail-info-block">
                            <h4>Violation Details</h4>
                            <div className="detail-info-grid">
                                <div className="detail-item">
                                    <span className="detail-label">Violation Type</span>
                                    <span className="detail-value">{ticket?.violationType}</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">Fine Amount</span>
                                    <span className="detail-value">${ticket?.fineAmount?.toFixed(2)}</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">Issued Date</span>
                                    <span className="detail-value">{ticket?.issuedDate}</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">Due Date</span>
                                    <span className="detail-value">{ticket?.dueDate}</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">Location</span>
                                    <span className="detail-value">{ticket?.location}</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">Officer</span>
                                    <span className="detail-value">{ticket?.officer}</span>
                                </div>
                            </div>
                        </div>

                        <div className="detail-info-block">
                            <h4>Vehicle Information</h4>
                            <div className="detail-info-grid">
                                <div className="detail-item">
                                    <span className="detail-label">License Plate</span>
                                    <span className="detail-value">{ticket?.licensePlate}</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">Make</span>
                                    <span className="detail-value">{ticket?.vehicleMake}</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">Model</span>
                                    <span className="detail-value">{ticket?.vehicleModel}</span>
                                </div>
                            </div>
                        </div>

                        {ticket?.evidenceUrl && (
                            <div className="detail-info-block">
                                <h4>Evidence</h4>
                                <img src={ticket?.evidenceUrl} alt="Violation Evidence" className="detail-image" />
                            </div>
                        )}
                    </div>

                    <div className="detail-sidebar">
                        <div className="workflow-tracker">
                            <h4>Workflow Progress</h4>
                            <div className="workflow-tracker-list">
                                {ticket?.workflow?.map((stage, index) => (
                                    <div key={index} className={`workflow-stage ${index <= activeWorkflowIndex ? 'active' : ''}`}>
                                        <div className="workflow-dot"></div>
                                        <div className="workflow-stage-info">
                                            <span className="workflow-stage-title">{stage?.stage}</span>
                                            {stage?.date && <span className="workflow-stage-meta">{stage?.date} by {stage?.by}</span>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="audit-log" style={{ marginTop: 'var(--spacing-xl)' }}>
                            <h4>Audit Log</h4>
                            <div className="audit-log-list">
                                {ticket?.auditLog?.map((log, index) => (
                                    <div className="audit-log-item" key={index}>
                                        <IconHistory className="audit-icon" />
                                        <div className="audit-details">
                                            <p><strong>{log?.user}:</strong> {log?.action}</p>
                                            <span className="timestamp">{log?.timestamp}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const UsersScreen = () => {
        const accessibleUsers = currentUserRole === ROLES.ADMIN
            ? dummyUsers
            : dummyUsers?.filter(user => user?.role === currentUserRole);

        return (
            <div className="main-content">
                <h1 style={{ marginBottom: 'var(--spacing-xl)' }}>System Users</h1>
                <div className="card-grid">
                    {accessibleUsers?.map(user => (
                        <div className="card" key={user?.id} onClick={() => addToast(`Viewing user ${user?.name}'s profile`, 'info')}>
                            <div className="card-header">
                                <h4 className="card-title">{user?.name}</h4>
                                <span className="status-badge status-ISSUED">{user?.role}</span> {/* Reusing status badge for roles */}
                            </div>
                            <div className="card-content">
                                <p><strong>Email:</strong> {user?.email}</p>
                                <p><strong>ID:</strong> {user?.id}</p>
                            </div>
                            <div className="card-footer">
                                <span className="card-meta">Last Login: {new Date().toLocaleString()}</span>
                                <span className="card-detail-action">View Profile <IconArrowRight /></span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const SettingsScreen = () => {
        const [username, setUsername] = useState('Admin User');
        const [email, setEmail] = useState('admin@example.com');
        const [password, setPassword] = useState('');
        const [confirmPassword, setConfirmPassword] = useState('');
        const [errors, setErrors] = useState({});

        const validateForm = () => {
            const newErrors = {};
            if (!username) newErrors.username = 'Username is required.';
            if (!email) newErrors.email = 'Email is required.';
            else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid.';
            if (password && password.length < 6) newErrors.password = 'Password must be at least 6 characters.';
            if (password && password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match.';
            setErrors(newErrors);
            return Object.keys(newErrors).length === 0;
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            if (validateForm()) {
                addToast('Profile updated successfully!', 'success');
                // Simulate API call to update settings
                console.log('Updating settings:', { username, email, password });
            } else {
                addToast('Please correct the errors in the form.', 'error');
            }
        };

        return (
            <div className="main-content">
                <h1 style={{ marginBottom: 'var(--spacing-xl)' }}>User Settings</h1>
                <div className="glass-panel" style={{ maxWidth: '600px' }}>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            {errors.username && <p className="error-message">{errors.username}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            {errors.email && <p className="error-message">{errors.email}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">New Password (optional)</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {errors.password && <p className="error-message">{errors.password}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm New Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ marginTop: 'var(--spacing-md)' }}>Save Changes</button>
                    </form>
                </div>
            </div>
        );
    };

    const ToastDisplay = ({ toastsList }) => (
        <div className="toast-container">
            {toastsList?.map((toast) => (
                <div key={toast?.id} className={`toast ${toast?.type}`}>
                    {toast?.type === 'success' && <IconCheckCircle className="toast-icon" />}
                    {toast?.type === 'error' && <IconError className="toast-icon" />}
                    {toast?.type === 'info' && <IconInfo className="toast-icon" />}
                    {toast?.type === 'warning' && <IconWarning className="toast-icon" />}
                    <span className="toast-message">{toast?.message}</span>
                </div>
            ))}
        </div>
    );

    return (
        <div className="app-container">
            <Sidebar currentScreen={view?.screen} />
            <Header />
            <main className="main-content">
                {view?.screen === 'DASHBOARD' && <DashboardScreen />}
                {view?.screen === 'TICKETS' && <TicketsScreen />}
                {view?.screen === 'TICKET_DETAIL' && <TicketDetailScreen ticketId={view?.params?.id} />}
                {view?.screen === 'USERS' && <UsersScreen />}
                {view?.screen === 'SETTINGS' && <SettingsScreen />}
                {/* Add other screens as needed */}
            </main>
            <ToastDisplay toastsList={toasts} />
        </div>
    );
}

export default App;