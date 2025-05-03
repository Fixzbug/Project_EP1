create table
    if not exists users (
        id SERIAL primary key,
        email VARCHAR(255) unique not null,
        password TEXT not null
    );

create table
    devices (
        id SERIAL primary key,
        device_code VARCHAR(50) unique not null,
        name VARCHAR(100) not null,
        status VARCHAR(20) default 'offline',
        temperature numeric(5, 2),
        next_action TIMESTAMP,
        last_active TIMESTAMP default NOW (),
        schedule_day VARCHAR(20),
        round1_on TIMESTAMP,
        round1_off TIMESTAMP,
        round2_on TIMESTAMP,
        round2_off TIMESTAMP
    );

insert into
    devices (
        device_code,
        name,
        status,
        temperature,
        next_action,
        last_active,
        schedule_day,
        round1_on,
        round1_off,
        round2_on,
        round2_off
    )
values
    -- Device 1
    (
        'device001',
        'Zone 1 - ห้องประชุม',
        'online',
        26.9,
        '2025-03-26 15:00:00',
        '2025-03-26 14:30:00',
        'monday',
        '2025-03-31 09:00:00',
        '2025-03-31 10:00:00',
        '2025-03-31 14:00:00',
        '2025-03-31 15:00:00'
    ),
    -- Device 2
    (
        'device002',
        'Zone 2 - ห้อง Lab',
        'offline',
        null,
        null,
        '2025-03-26 10:15:00',
        'tuesday',
        '2025-04-01 08:30:00',
        '2025-04-01 09:30:00',
        null,
        null
    ),
    -- Device 3
    (
        'device003',
        'Zone 3 - ชั้น 2',
        'online',
        27.5,
        '2025-03-26 16:30:00',
        '2025-03-26 14:45:00',
        'wednesday',
        '2025-04-02 07:00:00',
        '2025-04-02 08:00:00',
        '2025-04-02 13:00:00',
        '2025-04-02 14:00:00'
    ),
    -- Device 4
    (
        'device004',
        'Zone 4 - ชั้น 3',
        'standby',
        25.3,
        null,
        '2025-03-26 14:00:00',
        'thursday',
        null,
        null,
        null,
        null
    ),
    -- Device 5
    (
        'device005',
        'Zone 5 - ลานจอดรถ',
        'error',
        null,
        null,
        '2025-03-26 13:50:00',
        'friday',
        '2025-04-04 06:00:00',
        '2025-04-04 07:00:00',
        null,
        null
    );

create table
    device_status_logs (
        id SERIAL primary key,
        device_code VARCHAR(50) not null,
        time TIMESTAMP not null,
        status VARCHAR(10) not null,
        next_action VARCHAR(50),
        temperature numeric(5, 2)
    );

insert into
    device_status_logs (
        device_code,
        time,
        status,
        next_action,
        temperature
    )
values
    (
        'device001',
        '2025-03-20 09:10:00',
        'ON',
        'Off: 12:00',
        25.83
    ),
    (
        'device001',
        '2025-03-20 09:20:00',
        'ON',
        'Off: 12:00',
        20.41
    );