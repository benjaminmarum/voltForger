from setuptools import setup, find_packages

setup(
    name="volteforge",
    version="0.0.1",
    packages=find_packages(),
    install_requires=[
        # Add your project's dependencies here
    ],
    entry_points={
        'console_scripts': [
            'myapp = mypackage.mymodule:main',
        ],
    },
)
