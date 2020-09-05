# Deploy to github pages

# Remove old dist folder
rm -rf dist

# Create the dist folder

# Make a copy of the node_modules folder with the required dependencies

mkdir -p dist/node_modules/

cp -r node_modules/theme-switcher-component dist/node_modules/theme-switcher-component

cp -t dist ./index.html ./styles.css 

# Declare that we are not going to use jekyll
# https://stackoverflow.com/questions/43481269/github-pages-404-on-node-modules-folder#:~:text=1%20Answer&text=Github%20pages%20uses%20a%20version,ignores%20node_modules%20folder%20by%20default.&text=nojekyll%20text%20file%20in%20the%20root%20of%20the%20gh%2Dpages%20branch.

touch dist/.nojekyll

# Deploy
npx gh-pages --dotfiles --dist dist
