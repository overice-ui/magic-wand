if (typeof window !== 'undefined') {
    const chrome = window.chrome;

    // 当页面加载时，将之前保存的选项加载到表单中
    window.addEventListener('load', () => {
        chrome.storage.local.get(['menu_bar_position', 'show_menu_bar_flag', 'interval_monitor', 'ui_switch_flag'], (result) => {
            document.querySelector('#menu_bar_position').value = result.menu_bar_position || 'left';
            document.querySelector('#show_menu_bar_flag').value = result.show_menu_bar_flag || 'true';
            document.querySelector('#interval_monitor').value = result.interval_monitor || '30';
            document.querySelector('#ui_switch_flag').checked = result.ui_switch_flag === undefined? true : result.ui_switch_flag;
        });
    });


    // 当用户点击“保存”按钮时，保存选项到本地存储中
    document.querySelector('#save').addEventListener('click', () => {
        const menu_bar_position = document.querySelector('#menu_bar_position').value;
        const show_menu_bar_flag = document.querySelector('#show_menu_bar_flag').value;
        const interval_monitor = document.querySelector('#interval_monitor').value;
        const ui_switch_flag = document.querySelector('#ui_switch_flag').checked;

        chrome.storage.local.set({menu_bar_position, show_menu_bar_flag, interval_monitor, ui_switch_flag}, () => {
            alert('Options saved!');
        });
    });
}
