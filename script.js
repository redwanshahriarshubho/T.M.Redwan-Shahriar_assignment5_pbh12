let heartCount = 0;
let coinCount = 100;
let copyCount = 0;
let callHistory = [];

const heartCountEl = document.getElementById('heartCount');
const coinCountEl = document.getElementById('coinCount');
const copyCountEl = document.getElementById('copyCount');
const historyListEl = document.getElementById('historyList');
const clearHistoryBtn = document.getElementById('clearHistory');

function updateCounters() {
    heartCountEl.textContent = heartCount;
    coinCountEl.textContent = coinCount;
    copyCountEl.textContent = copyCount;
}

document.querySelectorAll('.heart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        heartCount++;
        updateCounters();
        btn.classList.add('pulse-heart');
        setTimeout(() => btn.classList.remove('pulse-heart'), 1500);
    });
});

document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const number = btn.dataset.number;
        if (number) {
            navigator.clipboard.writeText(number).then(() => {
                copyCount++;
                updateCounters();
                alert(`নম্বর ${number} ক্লিপবোর্ডে কপি করা হয়েছে!`);
            }).catch(() => {
                alert('কপি করতে ব্যর্থ হয়েছে।');
            });
        }
    });
});

document.querySelectorAll('.call-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const service = btn.dataset.service;
        const number = btn.dataset.number;
        if (coinCount < 20) {
            alert('অপর্যাপ্ত কয়েন! কল করার জন্য কমপক্ষে ২০ কয়েন প্রয়োজন।');
            return;
        }
        coinCount -= 20;
        alert(`কল করা হচ্ছে: ${service} (${number})`);
        const time = new Date().toLocaleTimeString();
        callHistory.push({ service, number, time });
        updateCounters();
        renderHistory();
    });
});

function renderHistory() {
    historyListEl.innerHTML = '';
    if (callHistory.length === 0) {
        historyListEl.innerHTML = '<p class="text-gray-500 text-center">কোনো কল ইতিহাস নেই</p>';
        return;
    }
    callHistory.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('bg-gray-50', 'p-2', 'rounded', 'text-xs');
        div.innerHTML = `
            <div class="font-medium">${item.service}</div>
            <div>${item.number}</div>
            <div class="text-gray-500">${item.time}</div>
        `;
        historyListEl.appendChild(div);
    });
}

clearHistoryBtn.addEventListener('click', () => {
    callHistory = [];
    renderHistory();
});

updateCounters();
renderHistory();