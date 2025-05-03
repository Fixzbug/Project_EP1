$(document).ready(async function () {


    // =========================
    // 1. ✅ JWT: แสดง email จาก token
    // =========================
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = 'login.html';
        return;
    }

    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        $('#userEmail').text(payload.email || 'Unknown');
    } catch (err) {
        console.error('Invalid token', err);
        $('#userEmail').text('Invalid User');
    }


    // เริ่มต้นแสดง Tab แรก
    const tabs = $('.tab-btn');
    const contents = $('#deviceTableSection, #tab2, #deviceControlSection');

    // เริ่มต้นแสดง Tab แรก
    contents.hide();
    $('#deviceTableSection').show();
    // $('#statusdeviceTable').show();

    tabs.first().addClass('text-blue-600 border-b-2 border-blue-600');

    tabs.click(function () {
        const tabId = $(this).data('tab');
        console.log(tabId);

        // ซ่อนทุก section ก่อน
        contents.hide();

        if (tabId === 'tab1') {
            $('#deviceTableSection').show();
            $('#statusdeviceTable').hide();
        } else if (tabId === 'tab2') {
            $('#deviceTableSection').hide();
            $('#statusdeviceTable').show();
        } else if (tabId === 'tab3') {
            $('#deviceTableSection').hide();
            $('#statusdeviceTable').hide();
            $('#tab3').show();
        }

        // ปรับสีและเส้นใต้ของปุ่มที่ถูกเลือก
        tabs.removeClass('text-blue-600 border-b-2 border-blue-600');
        $(this).addClass('text-blue-600 border-b-2 border-blue-600');
    });

    // =========================
    // 2. ✅ โหลดอุปกรณ์ทั้งหมด → DataTable
    // =========================
    const res = await fetch('/api/devices');
    const data = await res.json();

    // ถ้ามี DataTable อยู่แล้ว ให้ destroy ก่อน
    if ($.fn.DataTable.isDataTable('#deviceTable')) {
        $('#deviceTable').DataTable().destroy();
    }

    const table = $('#deviceTable').DataTable({
        data: data,
        columns: [
            { data: 'id' },
            {
                data: 'device_code',
                render: (data) =>
                    `<button class="view-btn flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded-full shadow transition-all duration-200" data-id="${data}">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-.6 1.933-1.905 3.547-3.542 4.6C16.365 18.743 14.253 19.5 12 19.5s-4.365-.757-6-2.1c-1.637-1.053-2.942-2.667-3.542-4.6z" />
                      </svg>
                      ดู
                    </button>`

            },
            { data: 'status' },
            { data: 'schedule_day' },
            { data: 'next_action', render: formatDate },
            { data: 'temperature' },
            { data: 'last_active', render: formatDate }
        ],
        dom: 'Bfrtip',
        buttons: [
            {
                extend: 'copy',
                text: '<span class="flex items-center gap-1">📋 Copy</span>',
                className: ''
            },
            {
                extend: 'csv',
                text: '<span class="flex items-center gap-1">🧾 CSV</span>',
                className: ''
            },
            {
                extend: 'excel',
                text: '<span class="flex items-center gap-1">📊 Excel</span>',
                className: ''
            },
            {
                extend: 'pdf',
                text: '<span class="flex items-center gap-1">📄 PDF</span>',
                className: ''
            },
            {
                extend: 'print',
                text: '<span class="flex items-center gap-1">📄 Print</span>',
                className: 'dt-blue'
            }
        ],
        order: [[0, 'asc']],
        responsive: true,

    });



    const res_status = await fetch('/api/devices/status');
    const logs_status = await res_status.json();

    console.log(logs_status);


    // ถ้ามี DataTable อยู่แล้ว ให้ destroy ก่อน
    if ($.fn.DataTable.isDataTable('#allStatusTable')) {
        $('#allStatusTable').DataTable().destroy();
    }

    $('#allStatusTable').DataTable({
        data: logs_status,
        columns: [
            { data: 'id' },
            { data: 'device_code' },
            { data: 'time', render: formatDate },
            { data: 'status' },
            { data: 'next_action' },
            { data: 'temperature', render: d => `${parseFloat(d).toFixed(2)} °C` }
        ],
        dom: 'Bfrtip',
        buttons: [
            {
                extend: 'copy',
                text: '<span class="flex items-center gap-1">📋 Copy</span>',
                className: ''
            },
            {
                extend: 'csv',
                text: '<span class="flex items-center gap-1">🧾 CSV</span>',
                className: ''
            },
            {
                extend: 'excel',
                text: '<span class="flex items-center gap-1">📊 Excel</span>',
                className: ''
            },
            {
                extend: 'pdf',
                text: '<span class="flex items-center gap-1">📄 PDF</span>',
                className: ''
            },
            {
                extend: 'print',
                text: '<span class="flex items-center gap-1">📄 Print</span>',
                className: 'dt-blue'
            }
        ],
        order: [[0, 'asc']],
        responsive: true,
        // scrollX: true,
        autoWidth: false
    });

    // =========================
    // 3. ✅ Google Gauge Chart (โหลดครั้งเดียว)
    // =========================
    // let gaugeData = null;
    // let gaugeOptions = null;
    // let gaugeChart = null;
    // let gaugeReady = false;

    // google.charts.load('current', { packages: ['gauge'] });
    // google.charts.setOnLoadCallback(() => {
    //     gaugeReady = true;
    // });

    // function drawGauge(temp = 26.9) {
    //     if (!gaugeReady || !document.getElementById('gauge_div')) {
    //         setTimeout(() => drawGauge(temp), 200);
    //         return;
    //     }

    //     gaugeData = google.visualization.arrayToDataTable([
    //         ['Label', 'Value'],
    //         ['Temp', temp]
    //     ]);

    //     gaugeOptions = {
    //         width: 300, height: 120,
    //         redFrom: 35, redTo: 50,
    //         yellowFrom: 30, yellowTo: 35,
    //         minorTicks: 5,
    //         max: 50
    //     };

    //     gaugeChart = new google.visualization.Gauge(document.getElementById('gauge_div'));
    //     gaugeChart.draw(gaugeData, gaugeOptions);
    // }

    // =========================
    // 4. ✅ เมื่อคลิก "ดู"
    // =========================
    $(document).on('click', '.view-btn', async function () {
        const deviceId = $(this).data('id');

        try {
            const res = await fetch(`/api/device/${deviceId}`);
            const device = await res.json();

            // แสดงหน้าควบคุม
            $('#deviceTableSection').hide();
            $('#deviceControlSection').show();

            // Inject UI ใหม่ทั้งหมด
            $('#deviceControlSection').html(`

          <div class="flex justify-between items-center mb-4">
            <h2 class="text-2xl font-semibold">ควบคุมอุปกรณ์</h2>
            <button onclick="backToList()" class="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded">กลับ</button>
          </div>
  
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded-lg shadow">
              <h3 id="deviceName" class="text-lg font-semibold mb-2">${device.name} (${device.device_code})</h3>

              <div class="flex justify-center mb-6">
                 <div class="bg-blue-100 text-center rounded-lg p-4 mb-4">
                <div class="text-4xl font-bold text-blue-600 mt-2">${device.temperature == null ? '-' : device.temperature}°C</div>
             </div>
          
              </div>
              <div class="space-y-3">
                <button class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">ON Device</button>
                <button class="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">OFF Device</button>
                <button class="w-full bg-orange-400 text-white py-2 rounded hover:bg-orange-500">CLEAR สถานะ</button>
              </div>
            </div>
  
            <div class="bg-white p-4 rounded-lg shadow">
              <h3 class="text-lg font-semibold mb-2">ตั้งเวลา เปิด-ปิด แอร์</h3>
              <select id="schedule_day" class="w-full mb-4 px-3 py-2 border rounded">
                <option value="monday">วันจันทร์</option>
                <option value="tuesday">วันอังคาร</option>
                <option value="wednesday">วันพุธ</option>
                <option value="thursday">วันพฤหัสบดี</option>
                <option value="friday">วันศุกร์</option>
                <option value="saturday">วันเสาร์</option>
                <option value="sunday">วันอาทิตย์</option>
              </select>
  
              <div class="mb-3">
                <label class="block text-sm font-medium mb-1">Round 1 - ON / OFF:</label>
                <div class="flex gap-2">
                  <input id="round1_on" type="datetime-local" class="w-1/2 px-2 py-1 border rounded" />
                  <input id="round1_off" type="datetime-local" class="w-1/2 px-2 py-1 border rounded" />
                </div>
              </div>
  
              <div class="mb-3">
                <label class="block text-sm font-medium mb-1">Round 2 - ON / OFF:</label>
                <div class="flex gap-2">
                  <input id="round2_on" type="datetime-local" class="w-1/2 px-2 py-1 border rounded" />
                  <input id="round2_off" type="datetime-local" class="w-1/2 px-2 py-1 border rounded" />
                </div>
              </div>
  
              <button class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">ยืนยัน</button>
            </div>
          </div>
        `);

            // ใส่ค่าลง input หลังจาก inject
            $('#schedule_day').val(device.schedule_day || '');
            $('#round1_on').val(toLocalInput(device.round1_on));
            $('#round1_off').val(toLocalInput(device.round1_off));
            $('#round2_on').val(toLocalInput(device.round2_on));
            $('#round2_off').val(toLocalInput(device.round2_off));

            // วาด gauge ด้วยค่า temp จริง
            // drawGauge(device.temperature);


        } catch (err) {
            console.error('โหลดข้อมูลล้มเหลว:', err);
        }
    });

    // =========================
    // 5. Utilities
    // =========================
    function toLocalInput(dateStr) {
        if (!dateStr) return '';
        const d = new Date(dateStr);
        return d.toISOString().slice(0, 16);
    }

    function formatDate(dateStr) {
        if (!dateStr) return '-';
        const d = new Date(dateStr);
        return d.toLocaleString('th-TH', {
            day: '2-digit', month: '2-digit', year: 'numeric',
            hour: '2-digit', minute: '2-digit', second: '2-digit'
        });
    }
});

// =========================
// 6. Logout
// =========================
function logout() {
    localStorage.removeItem('token');
    window.location.href = 'login.html';
}

// =========================
// 7. กลับไปหน้ารายการ
// =========================
function backToList() {
    $('#deviceControlSection').hide();
    $('#deviceTableSection').show();
}
