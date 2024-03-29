// This file is part of yk38spage.github.io.
//
// yk38spage.github.io is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
//
// yk38spage.github.io is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License along with yk38spage.github.io. If not, see <https://www.gnu.org/licenses/>.

function openNav() {
    document.getElementById("nav-container").style.right = "0%";
    document.getElementById("nav-container").style.transition = "0.4s";
    document.getElementById("slide").style.display = "block";
}

function closeNav() {
    document.getElementById("nav-container").style.right = "-100%";
    document.getElementById("nav-container").style.transition = "0.4s";
    document.getElementById("slide").style.display = "none";
}
