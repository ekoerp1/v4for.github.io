document.addEventListener('DOMContentLoaded', () => {
    const searched = new URL(window.location).searchParams.get('searched');
    console.log('Searched term:', searched); //search wohoo

    function hidesomediv(text) {
        if (!text) {
            return; 
        }
        document.getElementById("hidethis").style.display = "none";
        document.getElementById("searchtitle").innerHTML = "Results for: " + searched;

        const descriptions = document.querySelectorAll('.description');
        descriptions.forEach(description => {
            if (!description.textContent.toLowerCase().includes(text.toLowerCase())) {
                description.parentElement.style.display = 'none';
            }
        });
    }

    hidesomediv(searched);
});